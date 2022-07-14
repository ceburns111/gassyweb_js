import axios from 'axios';


export default class UserService {
    async authenticate(userName, userPassword) {
        try {
            return await axios({
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

    async signup(userName, userPassword, email, phoneNumber, firstName, lastName) {
        try {
        return await axios({
                method: "post",
                url: "http://localhost:5200/users/signup",
                data: {
                    UserName: userName,
                    UserPassword: userPassword,
                    Email: email,
                    PhoneNumber: phoneNumber,
                    FirstName: firstName,
                    LastName: lastName
                }
            })
        } 
        catch (err) {
            console.error(err);
        }
    }
    
    // async refreshOldToken(oldToken) {
    //     console.log("Fart Old Token: " + oldToken);
    //     return await axios({
    //         method: "post",
    //         url: "http://localhost:5200/users/Refresh-Token",
    //         headers: {
    //             authorization: "Bearer " + oldToken
    //         }
    //     });
        
        
    //}
}
