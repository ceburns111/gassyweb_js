import { accountService } from "../Services/accountService";
import router from "./router";

export function authGuard(to) {
    const account = accountService.accountValue; 
    if (account) {
        return true;
    }
    router.push({path: '/login', query: {returnUrl: to.fullPath}});
    return false; 
}
