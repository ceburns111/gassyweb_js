import axios from 'axios';

import { accountService } from "../Services/accountService";

export async function jwtInterceptor() {
    axios.interceptors.request.use(request => {
        console.log("Itercepting request...");
        // add auth header with jwt if account is logged in and request is to the api url
        const account = accountService.accountValue;
        
        const isLoggedIn = account?.token;
        console.log(`Request URL: ${request.url}`);
        const isAuthUrl = request.url.startsWith("http://localhost/users/authenticate");

        if (isLoggedIn && !isAuthUrl) {
            console.log("attaching token...")
            request.headers.common.Authorization = `Bearer ${account.token}`;
        }

        return request;
    });
}