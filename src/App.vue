<script>
// import { RouterLink, RouterView } from "vue-router";
// import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

import { ref } from 'vue';
import { accountService } from "./Services/accountService";
export default {
  data() {
    return {
    items:[
            {
              label:'Home',
              to: '/',
            },
            {
              label:'Listings',
              to: '/listings',
            },
            {
              label:'Login',
              to: '/login',
            },
            {
              label:'Logout',
              to: '/logout',
            }
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
    }
  }

</script>

<template>
  <div>
    <Menubar :model="items">
    <template #start>
    </template>
    <template #item="{item}">
        <a :href="item.label">{{item.label}}</a>
    </template>
    <template #end>
    </template>
    </Menubar>
  </div>
</template> 


<style>
</style>