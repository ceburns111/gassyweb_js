import axios from 'axios';

export default class WishlistService {
    async getItems(userId, token) {
    return await axios.get( 'http://localhost:5200/wishlist/items/2', {
        headers: {
            Authorization: 'Bearer ' + token
        }        
        });
    }
    
}


