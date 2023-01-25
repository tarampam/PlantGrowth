import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WindowSimulatorScreen from './screens/WindowSimulatorScreen';
import StartScreen from './screens/StartScreen';
import SearchingPlantScreen from './screens/SearchingPlantScreen';
import SearchingPlantDetailsScreen from './screens/SearchingPlantDetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import WallSimulatorScreen from "./screens/WallSimulatorScreen";
import FloorSimulatorScreen from "./screens/FloorSimulatorScreen";
import PlantSelectionScreen from "./screens/PlantingScreens/PlantSelectionScreen";
import ChoiceOfGround from "./screens/PlantingScreens/ChoiceOfGround";
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-content';
import IconButton from './components/ui/IconButton';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SvgFloor, SvgWall, SvgWindow} from "./components/ui/Svg";
import {Provider} from "react-redux";
import {Run} from "./simulationHandler/Engine"
import {store} from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();
const PlantingStack = createNativeStackNavigator();
const SearchingStack = createNativeStackNavigator();

function SearchingNav() {
    return (
        <SearchingStack.Navigator>
            <SearchingStack.Screen name={'Searching'} component={SearchingPlantScreen} options={{headerShown: false}}/>
            <SearchingStack.Screen name={'Searching Details'} component={SearchingPlantDetailsScreen} options={{headerTitle: 'Szczegóły rośliny'}}/>
        </SearchingStack.Navigator>
    )
}

function PlantingNav() {
    return (
        <PlantingStack.Navigator>
            <PlantingStack.Screen name='Simulator' component={BottomNav} options={{headerShown: false}}/>
            <PlantingStack.Screen name='Wybór rośliny' component={PlantSelectionScreen} />
            <PlantingStack.Screen name='Wybór ziemi' component={ChoiceOfGround} />
        </PlantingStack.Navigator>
    )
}

function BottomNav() {
    return (
        <Bottom.Navigator screenOptions={{tabBarStyle: {height: 70}, tabBarLabelStyle: {fontSize: 15}}}>
            <Bottom.Screen
                name='Parapet'
                component={WindowSimulatorScreen}
                options={{
                    headerShown: false,
                    tabBarInactiveTintColor: 'black',
                    tabBarActiveTintColor: 'green',
                    tabBarIcon: ({color,size}) =>(
                        <SvgWindow color={useIsFocused()? 'green': 'black'} size={40}/> )
                }}
            />
            <Bottom.Screen
                name='Ściana'
                component={WallSimulatorScreen}
                options={{
                    headerShown: false,
                    tabBarInactiveTintColor: 'black',
                    tabBarActiveTintColor: 'green',
                    tabBarIcon: ({color,size}) =>(
                        <SvgWall color={useIsFocused()? 'green': 'black'} size={40} /> )
                }}/>
            <Bottom.Screen
                name='Podłoga'
                component={FloorSimulatorScreen}
                options={{
                    headerShown: false,
                    tabBarInactiveTintColor: 'black',
                    tabBarActiveTintColor: 'green',
                    tabBarIcon: ({color,size}) =>(
                        <SvgFloor color={useIsFocused()? 'green': 'black'} size={40}/>)
                }}
            />
        </Bottom.Navigator>
    );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name='Start' component={StartScreen} options = {{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Logowanie' }}/>
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Rejestracja' }}/>
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        drawerContentStyle: { backgroundColor: Colors.primary100 },
        drawerInactiveTintColor: Colors.primary500,
        drawerActiveBackgroundColor: Colors.primary500,
        drawerActiveTintColor: 'white',
          headerRight: ({ tintColor }) => (
          <IconButton
          icon="exit"
          color={tintColor}
          size={24}
          onPress={authCtx.logout}
          />
          ),
      }}
    >
      <Drawer.Screen
        name="Symulacja"
        component={PlantingNav}
      />
      <Drawer.Screen
      name="Wyszukiwarka roślin"
      component={SearchingNav}
      />
      <Drawer.Screen 
      name='Ustawienia'
      component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
  );
}

function Root(){
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken(){
        const storedToken = await AsyncStorage.getItem('token');

        if(storedToken){
            authCtx.authenticate(storedToken);
        }
        setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

return <Navigation />;
}

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <AuthContextProvider>
        <Provider store={store}>
            <Root/>
            <Run/>
        </Provider>
    </AuthContextProvider>
    </>
  );
}