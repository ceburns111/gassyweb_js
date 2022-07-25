<script>
import { router } from './router/router';
import Menubar from 'primevue/menubar';
import { ref } from 'vue';
import { accountService } from "./Services/accountService";

export default {
  name: "App",
  data() {
    return {
    items:[
            {
              label:'Home',
              to: '/',
            },
            {
              label:'Wishlist',
              to: '/wishlist',
            },
            {
              label:'Listings',
              to: '/Listings',
            },
          ]
    }
  },
    setup() {
      const account = ref(null);
      accountService.account.subscribe(x => account.value = x);

      return {
            account,
            logout: accountService.logout,
        }
    },
    methods: {
      navTo(to){
        router.push(to);
      },
      logoutAccount() {
        accountService.logout();
      },
      loginAccount() {
        router.push("/login")
      }

    }
  }

</script>

<template>
<header>
    <div class="wrapper">
    <Menubar :model="items">
    <template #start>
    </template>
    <template #item="{item}">
        <Button :href="item.label" @click="navTo(item.to)">{{item.label}}</Button>
    </template>
    <template #end>
    <Button v-if="account === null" @click="loginAccount()">Login</Button>
    <Button v-else @click="logoutAccount()">Logout</Button>
    </template>
    </Menubar>
  </div>
  </header>

  <RouterView/>

</template> 




<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>