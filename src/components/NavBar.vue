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
        return { userStore }
  },        
   methods: {
    logout() {
      this.userStore.logout();
      this.$router.push({name: 'home'});


    }
   }
}
</script>

<template>
 <header>
    <div class="nbar">
      <nav>
        <RouterLink class="nitem" to="/">Home</RouterLink>
        <RouterLink class="nitem" v-if="userStore.username != ''"   :to="`/user/${userStore.username}`">Account</RouterLink>
        <RouterLink class="nitem"  v-if="userStore.username != '' " to="/wishlist">Wishlist</RouterLink>
        <RouterLink class="nitem" to="/listings">Listings</RouterLink>
        <RouterLink class="nitem"  v-if="userStore.username === '' " to="/login">Login</RouterLink>
        <Button class="logout"  v-if="userStore.username != ''" @click="logout()">Logout</Button>
      </nav>
    </div>
 </header>
 
  <RouterView />
</template>

<style>
  .nbar {
    background-color: rgb(146, 146, 146);
    padding: 1.2rem;
  }
  .nitem {
    padding: 12px;
  }
   .logout {
    background-color: rgb(255, 255, 255);
    font-weight: bold;
    padding: 0.2ch;
    align-items: right;
  }
  .logitem {
    padding: 12px;
  }
</style>