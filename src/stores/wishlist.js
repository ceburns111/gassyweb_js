import { defineStore, storeToRefs } from "pinia";
//import WishlistService from "../Services/wishlistService";
// import { useUserStore } from "./userStore"

export const useWishlistStore = defineStore({
  id: 'wishlist',
  state: () => ({
   items: []
  }),
  getters: {
  },
  actions: {
   getItems () {
      // const userStore = useUserStore();
      // const wishlistService = new WishlistService(); 
      // return await wishlistService.getItems(userStore.id, userStore.token).then(result => result.data);
    },
  }
})


