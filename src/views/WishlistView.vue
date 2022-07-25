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
 <table>
    <tr>
      <th>Category</th>
      <th>Make</th>
      <th>Model</th>
      <th>Min Price</th>
      <th>Max Price</th>
    </tr>
    <tr v-for="item in items" :key="item.id">
        <td>{{item.category}}</td>
        <td>{{ item.make}} </td>
        <td>{{item.model}}</td>
        <td>{{item.minPrice}}</td>
        <td>{{item.maxPrice}}</td>
    </tr>
  </table>
  <Button @click="addNewItem()">Add an item</Button>
</template>

<style scoped>

</style>