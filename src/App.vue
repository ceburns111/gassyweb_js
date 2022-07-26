<script>
import { router } from './router/router';
import Menubar from 'primevue/menubar';
import { ref } from 'vue';
import { accountService } from "./Services/accountService";

export default {
  name: "app",
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
             {
              label:'Account',
              to: '/Account',
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
    <div>
    <Menubar id="mBar" :model="items">
    <template #start>
    </template>
    <template #item="{item}">
        <a class="hdCol" @click="navTo(item.to)">{{item.label}}</a>
    </template>
    <template #end>
    <a v-if="account === null" @click="loginAccount()">Login</a>
    <a v-else @click="logoutAccount()">Logout</a>
    </template>
    </Menubar>
    <RouterView/>
  </div>
</template> 




<style scoped>
.hdCol {
  padding: 10px; 
}
</style>