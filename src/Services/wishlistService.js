import ax from "../helpers/axiosConfig"

export const wishlistService = {
    getItems,
    addItem
};

async function getItems(userId) {
    console.log(`Getting items for UserId: ${userId}`);
    return await ax.get(`http://localhost:5200/wishlist/items/${userId}`);
}

async function addItem(userId, make, model, category, minPrice, maxPrice) {
    console.log(`Adding item for User: ${userId}`);
    var itemData = {OwnerId: userId, Make: make, Model: model, Category: category, MinPrice: minPrice, maxPrice: maxPrice}
    await ax.post(`http://localhost:5200/wishlist/new/`, itemData);
}

