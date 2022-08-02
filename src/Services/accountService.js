import axios from "axios";
import {router} from "../router"

import ax from "../helpers/axiosConfig";

import { BehaviorSubject } from 'rxjs';
const baseUrl = `${import.meta.env.VITE_GASSY_URL}/users`;
const accountSubject = new BehaviorSubject(null);

export const accountService = {
    login,
    logout,
    signup,
    editAccount,
    deleteAccount,
    account: accountSubject.asObservable(),
    get accountValue() { return accountSubject.value; }
};

async function login(userName, userPassword) {
    console.log(`Attempting to authenticate user: ${userName}...`)

    let reqBody = { UserName: userName, UserPassword: userPassword };
    let authResponse = await ax.post(`${baseUrl}/authenticate`, reqBody);

    if (!authResponse.data) {
        return;
    }

    accountSubject.next(authResponse.data);
    await _startAuthenticateTimer();

   // get return url from query parameters or default to home page
 
   router.push('/');
   
   console.log("Login completed.")
   console.log("...........................")
   console.log("...........................")
}

async function signup(userName, userPassword, firstName, lastName, email, phoneNumber) {
    let data = { UserName: userName, UserPassword: userPassword, FirstName: firstName, LastName: lastName, Email: email, PhoneNumber: phoneNumber };
    await ax.post(`${baseUrl}/signup`, data);
      
    router.push('/');

   console.log("Signup completed.")
   console.log("...........................")
   console.log("...........................")

}

async function refreshJwtToken() {
    console.log(`Attempting to refresh token...`)

    let refreshResponse = await ax.post(`${baseUrl}/refresh-token`);
    console.log(`authResponse: ${JSON.stringify(refreshResponse)}`);

    const account = refreshResponse.data;    
    console.log(account);


    accountSubject.next(account);
    await _startAuthenticateTimer(); 

    const returnUrl = router.currentRoute.value.query['returnUrl'] || '/';
    router.push(returnUrl);
}

let authenticateTimeout;

async function _startAuthenticateTimer() {
    console.log("Starting authentication timer...")
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(accountSubject.value.token.split('.')[1]));
    // set a timeout to re-authenticate with the api one minute before the token expires
    const expires = new Date(jwtToken.exp * 1000);
    
    
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    authenticateTimeout = setTimeout(() => 
        refreshJwtToken(accountSubject.value.token),
        timeout
        );


    console.log("Start authentication timer completed.")
    console.log("....................................")

}

async function editAccount(id, firstName, lastName, email, phoneNumber) {
    let data = { Id: id, FirstName: firstName, LastName: lastName, Email: email, PhoneNumber: phoneNumber };
    let response = await ax.post(`${baseUrl}/Edit`, data);
    console.log(JSON.stringify(response.data));

    if (!response.data) {
        return;
    }
  
    
    router.push('/listings');
   
   console.log("Edit account completed.")
   console.log("................................")
}

async function deleteAccount(userId) {
    await ax.post(`${baseUrl}/${userId}/delete`);
    logout();
}

function logout() {
    console.log("logging out...")
    //stopAuthenticateTimer();
    accountSubject.next(null);
    router.push('/login')
}
