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
            const {token, userId} = await createUser(email,password);
            authCtx.authenticate(token, userId);
        } catch (error) {
            Alert.alert('Błąd uwierzytelnienia','Nie można utworzyć użytkownika, proszę sprawdzić wprowadzone dane i spróbować ponownie')
        }
        setIsAutenticating(false);
    }

    if(isAuthenticating){
        return <LoadingOverlay message="Tworzenie konta..."/>
    }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;