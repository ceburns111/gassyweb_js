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
              label:'Listings',
              to: '/Listings',
            },
            {
              label:'Wishlist',
              to: '/wishlist',
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
     <div class="positioned p-d-flex p-jc-between p-ai-center">
    <Menubar id="mBar" :model="items">
    <template #start></template>
    <template #item="{item}">
        <a v-if="account != null || (item.label != 'Wishlist' && item.label != 'Account')" class="hdCol" @click="navTo(item.to)">{{item.label}}</a>
    </template>
    <template #end>
    <a class="hdCol" v-if="account === null" @click="loginAccount()">Login</a>
    <a class="hdCol" v-else @click="logoutAccount()">Logout</a>
    </template>
    </Menubar>
    <RouterView/>
  </div>
</template> 




<style scoped>
.hdCol {
  padding: 10px; 
}
#mBar {
  background-color:rgb(29, 31, 32)
}
</style>