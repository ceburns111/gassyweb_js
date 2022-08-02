import ax from "../helpers/axiosConfig"
import {router} from "../router/router"

const baseUrl = `${import.meta.env.VITE_GASSY_URL}/wishlist`;
export const wishlistService = {
    getItems,
    addItem,
    deleteItem
};

async function getItems(userId) {
    console.log(`Getting items for UserId: ${userId}`);
    return await ax.get(`${baseUrl}/items/${userId}`);
}

async function addItem(userId, make, model, category, minPrice, maxPrice) {
    console.log(`Adding item for User: ${userId}`);
    var itemData = {OwnerId: userId, Make: make, Model: model, Category: category, MinPrice: minPrice, maxPrice: maxPrice}
    await ax.post(`${baseUrl}/new`, itemData);
    router.push("/wishlist")
}

async function deleteItem(itemId) {
    console.log(`Deleting item (id): ${itemId}`);
    var itemData = { id: itemId }
    await ax.post(`${baseUrl}/delete/${itemId}`, itemData);
    router.push("/")
}