import ax from "../helpers/axiosConfig"

export const wishlistService = {
    getItems,
};

async function getItems(userId) {
    console.log(`Getting items for UserId: ${userId}`);
    return await ax.get(`http://localhost:5200/wishlist/items/${userId}`);
}





