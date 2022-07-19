import axios from "axios";
import {router} from "../router"

import { BehaviorSubject } from 'rxjs';

const baseUrl= "http://localhost:5200/users";
const accountSubject = new BehaviorSubject(null);

export const accountService = {
    login,
    account: accountSubject.asObservable(),
    get accountValue() { return accountSubject.value; }
};

async function login(userName, userPassword) {
    const x = "";
    //authenticate with Gassy API
    const authResponse = await axios({
        method: "post",
        url: 'http://localhost:5200/users/authenticate',
        //url: `${baseUrl}/authenticate`,
        data: {
            UserName: userName,
            UserPassword: userPassword
        },
    });

    console.log(authResponse.data);
   // .then(result => { 
        //     this.token = result.data['token'],
        //     this.role = result.data['role'],
        //     this.username = result.data['userName'],
        //     this.id = result.data['id'],
        //     this.email = result.data['email']

    if (!authResponse) return;

    accountSubject.next(authResponse.data);

   // get return url from query parameters or default to home page
   //const returnUrl = router.currentRoute.value.query['returnUrl'] || '/';
   router.push({name: "home"});
}