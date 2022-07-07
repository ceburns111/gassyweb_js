import axios from 'axios';


export default class UserService {
    async authenticate(userName, userPassword) {
        try {
            return await axios({
                method: "post",
                url: 'http://107.21.89.197:80/users/authenticate',
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
            url: "http://107.21.89.197:80/users/signup",
            data: {
                UserName: userName,
                UserPassword: userPassword,
                Email: email,
                PhoneNumber: phoneNumber,
                FirstName: firstName,
                LastName: lastName
            }
        })
    } catch (err) {
        console.error(err);
    }
    }
}