<script>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue';
import { accountService } from "./Services/accountService";
export default {
    setup() {
      const account = ref(null);
      accountService.account.subscribe(x => account.value = x);

      return {
            account,
            logout: accountService.logout,
            refreshToken: accountService.refreshToken           
        }
    }
  }

</script>

<template>
   <header>
    <div class="nbar">
      <nav>
        <RouterLink class="nitem" to="/">Home</RouterLink>
        <!-- <RouterLink class="nitem" :to="`/user/${userStore.username}`">Account</RouterLink> -->
        <RouterLink class="nitem" to="/listings">Listings</RouterLink>
        <RouterLink class="nitem" to="/wishlist">Wishlist</RouterLink>
        <RouterLink class="nitem" to="/login">Login</RouterLink>
        <a class="nav-item nav-link" @click="logout">Logout</a>
        <div></div>
        <a class="nav-item nav-link" @click="refreshToken">Refresh Token</a>

      </nav>
    </div>
 </header>
  <RouterView />
</template> 

<style>
@import "@/assets/base.css";
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