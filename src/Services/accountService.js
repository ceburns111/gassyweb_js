import axios from "axios";
import {router} from "../router"

import { BehaviorSubject } from 'rxjs';

const baseUrl= "http://localhost:5200/users";
const accountSubject = new BehaviorSubject(null);

export const accountService = {
    login,
    logout,
    account: accountSubject.asObservable(),
    get accountValue() { return accountSubject.value; }
};

async function login(userName, userPassword) {
    console.log(`Attempting to authenticate user: ${userName}...`)

    //authenticate with Gassy API
    const authResponse = await axios({
        method: "post",
        url: `${baseUrl}/authenticate`,
        //url: `${baseUrl}/authenticate`,
        data: {
            UserName: userName,
            UserPassword: userPassword
        },
    });
    
    console.log('Data:')
    console.log('authResponse.data');
    if (!authResponse.data) {
        console.log("empty response")
        return;
    }

    accountSubject.next(authResponse.data);
    await startAuthenticateTimer();


   // get return url from query parameters or default to home page
   const returnUrl = router.currentRoute.value.query['returnUrl'] || '/';
   router.push(returnUrl);
}

async function refreshToken() {
    console.log(`Attempting to refresh token...`)
    //authenticate with Gassy API
    const authResponse = await axios({
        method: "post",
        url: `${baseUrl}/refresh-token`,
        //url: `${baseUrl}/authenticate`,
    });
    
    if (!authResponse.data) {
        console.log("empty response")
        return;
    }

    accountSubject.next(authResponse.data);
    const returnUrl = router.currentRoute.value.query['returnUrl'] || '/';
    router.push(returnUrl);
}




function logout() {
    console.log("logging out...")
    //stopAuthenticateTimer();
    accountSubject.next(null);
    router.push('/login')
}

let authenticateTimeout;

async function startAuthenticateTimer() {
    console.log("Starting authentication timer...")
    console.log(accountSubject.value.token);

    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(accountSubject.value.token.split('.')[1]));
    console.log("jwtToken...")
    console.log(jwtToken);
    
    // set a timeout to re-authenticate with the api one minute before the token expires
    const expires = new Date(jwtToken.exp * 1000);
    console.log("expires...")
    console.log(expires);
    
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    console.log("timeout...")
    console.log(timeout);

    authenticateTimeout = setTimeout(async () => await refreshToken(), timeout);
}

// function stopAuthenticateTimer() {
// //not implemented
// }