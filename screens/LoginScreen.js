import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {login} from '../util/auth';
import {AuthContext} from '../store/auth-content';
import {getPlants} from "../util/plantEndpoints";
import {setPlantsData} from "../store/redux/plants";
import {useDispatch} from "react-redux";

function LoginScreen() {
    const dispatch = useDispatch();
    const [isAuthenticating, setIsAutenticating] = useState(false);

    const authCtx = useContext(AuthContext);
    async function loginHandler({email,password}){
        setIsAutenticating(true);
        try {
            const {token, userId} = await login(email,password);
            authCtx.authenticate(token, userId);
            const plants = await getPlants();
            await dispatch(setPlantsData({plants: plants}));
        } catch (error) {
            console.log(error)
            Alert.alert('Logowanie nie powiodło się :(', 'Nie można się zalogować. Sprawdź dane logowania lub spróbuj ponownie później!')
        }
        setIsAutenticating(false);
    }

    if(isAuthenticating){
        return <LoadingOverlay message="Logowanie..."/>
    }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;