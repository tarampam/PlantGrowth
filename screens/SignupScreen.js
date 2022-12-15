import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {createUser} from '../util/auth'
import {AuthContext} from '../store/auth-content';

function SignupScreen() {

    const [isAuthenticating, setIsAutenticating] = useState(false);

    const authCtx =  useContext(AuthContext);

    async function signupHandler({email,password}){
        setIsAutenticating(true);
        try {
            const token = await createUser(email,password);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert('Authentication faild','Could not create user, please check your input and try again later')
        }
        setIsAutenticating(false);
    }

    if(isAuthenticating){
        return <LoadingOverlay message="Tworzenie konta..."/>
    }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;