import axios from "axios";
import { BehaviorSubject } from 'rxjs';

const baseUrl= "";
const accountSubject = new BehaviorSubject(null);

export const accountService = {
    login,
    refreshToken, 
    logout,
    account: accountSubject.asObservable(),
    get accountValue() { return accountSubject.value; }
};

async function login(userName, userPassword) {
    //authenticate with Gassy API
    const user = await axios({
        method: "post",
        url: 'http://localhost:5200/users/authenticate',
        data: {
            UserName: userName,
            UserPassword: userPassword
        },
    }).then(result => result.data);

    if (!user) return;

    accountSubject.next(account);

   // get return url from query parameters or default to home page
   const returnUrl = router.currentRoute.value.query['returnUrl'] || '/';
   router.push(returnUrl);
}

async function refreshToken(userName, userPassword) {
    // return await axios({
    //     method: "post",
    //     url: "http://localhost:5200/users/Refresh-Token",
    //     headers: {
    //         authorization: "Bearer " + oldToken
    //     }
    // });
}

function logout() {

}


//helper methods
let authenticateTimeout; 

function startAuthenticateTimer() {
    const jwtToken = JSON.parse(accountSubject.value.token.split('.')[1]);
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 *100);
    authenticateTimeout = setTimeout(() => {
        
    }, timeout);
}