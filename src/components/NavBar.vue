<script>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';

export default {
    name: "Navbar",
    data () {
      return {
     }
    },
     setup() {
        const userStore = useUserStore();
        const { username } = storeToRefs(userStore);
        return { username }
  },        
  listingService: null,
//   methods: {},
//   created() { 
//     this.listingService = new ListingService();
//   },
//    mounted() {
//     this.listingService.getListingsAll().then(result => this.listings = result.data)
//   },

}
</script>
<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-if="username != '' " to="/wishlist">Your Wishlist</RouterLink>
        <RouterLink to="/listings">Listings</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
