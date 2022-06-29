import { defineStore } from "pinia";
import WishlistService from "../Services/wishlistService";
import { useUserStore } from '../stores/user';

export const useWishlistStore = defineStore({
  id: 'wishlist',
  state: () => ({
   items: []
  }),
  getters: {
  },
  actions: {
   async getItems () {
    const userStore = useUserStore(); 
    const wishlistService = new WishlistService(); 
    this.items = await wishlistService.getItems(userStore.id, userStore.token).then(result => result.data);
  },
    
  }
})


