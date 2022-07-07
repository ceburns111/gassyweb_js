import axios from 'axios';

export default class WishlistService {
    async getItems(userId, token) {
        return await axios({
            method: "get",
            url:  `http://107.21.89.197:80/wishlist/items/${userId}`,
            headers: {
                        authorization: 'Bearer ' + token
            }  
        });
    }

    async addItem(make, model, minPrice, maxPrice, ownerId, token) {
        return await axios({
            method: "post",
            url: "http://107.21.89.197:80/wishlist/new",
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
        })
    }
}





