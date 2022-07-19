<script>
import {wishlistService}  from '../Services/wishlistService';
import { accountService } from "../Services/accountService"
import { ref } from 'vue';


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
      
      await wishlistService.getItems(account?._value.id || 0).then(result => this.items = result.data);
    }
   
  }
};
</script>

<template>
<h1>wishlist</h1>
{{items}}
{{this.items}}
<table>
    <tr>
      <th>Category</th>
      <th>Make</th>
      <th>Model</th>
      <th>MinPrice</th>
      <th>MaxPrice</th>

    </tr>
    <tr v-for="item in items" :key="item.id">
        <td> {{ listing.Make }} </td>
        <td> {{ listing.Model }} </td>
        <!-- <td> ${{ listing.maxPrice }} </td>
        <td> ${{ listing.minPrice }} </td> -->
    </tr>
  </table>
</template>
