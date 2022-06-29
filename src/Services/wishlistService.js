import axios from 'axios';

export default class WishlistService {
    async getItems(userId, token) {
        return await axios({
            method: "get",
            url:  `http://localhost:5200/wishlist/items/${userId}`,
            headers: {
                        authorization: 'Bearer ' + token
            }  
        });
    }
}





