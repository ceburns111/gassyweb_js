<script>
import {wishlistService}  from '../Services/wishlistService';
import { accountService } from "../Services/accountService"
import { ref } from 'vue';
import { router } from '../router/router';


export default {
    name: "wishlistview",
     data () {
      return {
        userId: "",
        items: [],
    }
  },
  async created () {
    const account = ref();
    account.value = accountService.accountValue;
 
    if (account?._value.id != null)
    {    
      await wishlistService.getItems(account?._value.id || 0).then(result => this.items = result.data );
    }
   
  },
  methods: {
    addNewItem() {
      router.push('/wishlist_item')
    }
  }
};
</script>

<template>
<h1>Your Wishlist</h1>
<DataTable :value="items">
  <Column field="category" header="Product Category"></Column>
  <Column field="make" header="Make"></Column>
  <Column field="model" header="Model"></Column>
  <Column field="minPrice" header="Min Price"></Column>
  <Column field="maxPrice" header="Max Price"></Column>
</DataTable>

</template>

<style scoped>
</style>