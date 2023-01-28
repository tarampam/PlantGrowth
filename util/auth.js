import axios from 'axios';

const API_KEY ='AIzaSyCyMVw8Tnzcy-lhMPa17zvZUcWeDwuAiws'
const CREATE_USER = 'signUp';
const LOGIN = 'signInWithPassword';

async function authenticate(mode, email, password) {
    const url =`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    let token;
    let userId;
    await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    }).then (response => {
        token = response.data.idToken;
        userId = response.data.localId;
    }).catch(e =>{
        console.log(e)
    });
    return {token, userId};
}

export function createUser(email, password) {
    return authenticate(CREATE_USER, email, password);
}

export function login(email, password){
    return authenticate(LOGIN, email, password);
}