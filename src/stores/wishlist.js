// import { defineStore } from "pinia";
// import WishlistService from "../Services/wishlistService";
// import { useUserStore } from '../stores/user';
// import { useStorage } from "@vueuse/core";


// export const useWishlistStore = defineStore({
//   id: 'wishlist',
//   state: () => ({
//    items: useStorage('items', [])
//   }),
//   getters: {
//   },
//   actions: {
//     //Get all items in the users wishlist
//     async getItems() {
//       const userStore = useUserStore(); 
//       const wishlistService = new WishlistService(); 
//       await (wishlistService.getItems(userStore.id, userStore.token)).then(result => this.items = result.data);
//     },
    
//     //Adds new item to users wishlist
//     async addItem(make, model, minPrice, maxPrice) {
//       try {
//         const userStore = useUserStore();
//         const wishlistService = new WishlistService();
//         await (wishlistService.addItem(make, model, minPrice, maxPrice, userStore.id, userStore.token));
//       }
//       catch (err) {
//           console.error(err);
//       }
//     }
//   }
// })


