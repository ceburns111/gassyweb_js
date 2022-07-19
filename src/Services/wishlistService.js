import axios from 'axios';


export const wishlistService = {
    getItems,
    // account: accountSubject.asObservable(),
    // get accountValue() { return accountSubject.value; }
};

async function getItems(userId) {
    console.log(`Id: ${userId}`);
    return await axios({
        method: "get",
        url:  `http://localhost:5200/wishlist/items/${userId}`,
    });
}





