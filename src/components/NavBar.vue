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
}
</script>

<template>
 <header>
    <div class="nbar">
      <nav>
        <RouterLink class="nitem" to="/">Home</RouterLink>
        <RouterLink class="nitem" v-if="username != ''"   :to="`/user/${username}`">Account</RouterLink>
        <RouterLink class="nitem"  v-if="username != '' " to="/wishlist">Wishlist</RouterLink>
        <RouterLink class="nitem" to="/listings">Listings</RouterLink>
        <RouterLink class="nitem"  v-if="username === '' " to="/login">Login</RouterLink>
        <RouterLink class="nitem" to="/about">About</RouterLink>
      </nav>
    </div>
 </header>
  <RouterView />
</template>

<style>
  .nbar {
    background-color: rgb(67, 158, 79);
    padding: 1.2rem;
  }
  .nitem {
    padding: 12px;
  }
</style>