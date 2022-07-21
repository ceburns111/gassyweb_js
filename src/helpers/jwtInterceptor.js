import axios from 'axios';
import ax from "./axiosConfig"

import { accountService } from "../Services/accountService";

export async function jwtInterceptor() {
    ax.interceptors.request.use(request => {
        console.log("Itercepting request...");
        const account = accountService.accountValue;
        
        const isLoggedIn = account?.token;
        console.log(`Request URL: ${request.url}`);
        
        const isRefreshUrl = request.url.startsWith("http://localhost:5200/users/refresh-token")
        const isAuthUrl = request.url.startsWith("http://localhost:5200/users/authenticate");
        console.log("Checking if the user is logged in...")
        if (isLoggedIn)
        {
            console.log("The user is logged in, inspecting route")
            if (!isAuthUrl && !isRefreshUrl)  {
                    console.log("The request NOT going to an auth or refresh route, attaching JWT token")
                    console.log(`attaching token: ${account.token}`)
                    request.headers.common.Authorization = `Bearer ${account.token}`;         
            }
        }
        
        console.log("Intercept request completed.")
        console.log("...........................")
        console.log("...........................")

        return request;
    });
}