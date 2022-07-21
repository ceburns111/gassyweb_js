<script>
import { RouterLink, RouterView } from "vue-router";
import Button from 'primevue/button';

import { ref } from 'vue';
import { accountService } from "./Services/accountService";
export default {
    setup() {
      const account = ref(null);
      accountService.account.subscribe(x => account.value = x);

      return {
            account,
            logout: accountService.logout,
        }
    }
  }

</script>

<template>
   <header>
    <div class="nbar">
      <nav>
        <RouterLink class="nitem" to="/">Home</RouterLink>
        <RouterLink class="nitem" to="/listings">Listings</RouterLink>
        <RouterLink class="nitem" to="/wishlist">Wishlist</RouterLink>
        <RouterLink class="nitem" to="/login">Login</RouterLink>
        <Button label="Submit" class="nav-item nav-link" @click="logout" />
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