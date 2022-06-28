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
}