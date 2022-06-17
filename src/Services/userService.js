import axios from 'axios';


export default class UserService {
    
    authenticate(userName, userPassword) {
        try {
            return axios({
                method: "post",
                url: 'http://localhost:5200/users/authenticate',
                data: {
                    UserName: userName,
                    UserPassword: userPassword
                },
            });
        }
        catch (err) {
            console.error(err);
        }
    }

    // getAllUsers(token) {
    //     return axios.get(`http://localhost:5200/listings/${listingId}`);
    // }
}