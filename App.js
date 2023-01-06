import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WindowSimulatorScreen from './screens/WindowSimulatorScreen';
import StartScreen from './screens/StartScreen';
import SearchingPlantScreen from './screens/SearchingPlantScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();
const PlantingStack = createNativeStackNavigator();

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
        <Bottom.Navigator>
            <Bottom.Screen
                name='Parapet'
                component={WindowSimulatorScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color,size}) =>(
                        <SvgWindow color={color} size={size}/> )
                }}
            />
            <Bottom.Screen
                name='Ściana'
                component={WallSimulatorScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color,size}) =>(
                        <SvgWall color={color} size={size} /> )
                }}/>
            <Bottom.Screen
                name='Podłoga'
                component={FloorSimulatorScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color,size}) =>(
                        <SvgFloor color={color} size={size}/>)
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
      component={SearchingPlantScreen}
      />
      <Drawer.Screen 
      name='Profil'
      component={ProfileScreen}
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
      <Root/>
    </AuthContextProvider>
    </>
  );
}