import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    userId: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
});

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState();
    const [userId, setUserId] = useState();

    function authenticate(token, userId) {
        setUserId(userId);
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('userId', userId);
    }

    function logout(){
        setAuthToken(null);
        setUserId(null);
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('userId');
    }

    const value = {
        token: authToken,
        userId: userId,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;