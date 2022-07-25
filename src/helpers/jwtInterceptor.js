import axios from 'axios';
import ax from "./axiosConfig"

import { accountService } from "../Services/accountService";

export async function jwtInterceptor() {
    ax.interceptors.request.use(request => {
        console.log("Itercepting request...");
        console.log(`${JSON.stringify(request.data)}`)
        const account = accountService.accountValue;
        
        const isLoggedIn = account?.token;
        console.log(`Request URL: ${request.url}`);
        
        const isRefreshUrl = request.url.startsWith("http://localhost:5200/users/refresh-token")
        const isAuthUrl = request.url.startsWith("http://localhost:5200/users/authenticate");
        const isSignupUrl = request.url.startsWith("http://localhost:5200/users/signup");
        console.log("Checking if the user is logged in...")
        
        //if it is the listing route, this is public and does not need a token...
        if (isLoggedIn)
        {
            console.log("The user is logged in, inspecting route")
            if (!isAuthUrl && !isRefreshUrl && !isSignupUrl)  {
                    console.log("The request NOT going to an auth or refresh route, attaching JWT token")
                    console.log(`attaching token: ${account.token}`)
                    request.headers.common.Authorization = `Bearer ${account.token}`;         
            }
        }
        else {
            console.log("user not logged in")
        }
    
        console.log(request.url);
        console.log(request.data);
        console.log("Intercept request completed.")
        console.log("...........................")
        console.log("...........................")

        return request;
    });
}