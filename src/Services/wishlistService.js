import axios from 'axios';

export default class WishlistService {
    async getItems(userId, token) {
        try {
            return await axios({
                method: "get",
                url:  `http://localhost:5200/wishlist/items/${userId}`,
                headers: {
                            authorization: 'Bearer ' + token
                }  
            });
        }
        catch (err) {
            console.error(err);
        }
    }

    async addItem(make, model, minPrice, maxPrice, ownerId, token) {
        try {
            return await axios({
                method: "post",
                url: "http://localhost:5200/wishlist/new",
                headers: {
                    authorization: 'Bearer ' + token
                },
                data: {
                    Make: make,
                    Model: model,
                    MinPrice: minPrice,
                    MaxPrice: maxPrice,
                    OwnerId: ownerId
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    }
}





