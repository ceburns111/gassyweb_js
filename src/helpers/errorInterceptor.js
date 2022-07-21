import axios from "axios";
import ax from "./axiosConfig";
import { accountService } from "../Services/accountService";

export function errorInterceptor() {
    ax.interceptors.response.use(null, (error) => {
        console.log("intercepting error...")
        const { response } = error;
        if (!response) {
            // network error
            console.error(error);
            return;
        }
    
        if ([401, 403].includes(response.status) && accountService.accountValue) {
            // auto logout if 401 or 403 response returned from api
            accountService.logout();
        }

        const errorMessage = response.data || response.statusText;
        //onst errorMessage = Promise.Reject(error.response.data.err)
        //console.log(`uhh: ${JSON.stringify(response)}`)
        console.error('ERROR:', errorMessage);
    })
}