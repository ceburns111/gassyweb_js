<script>
import { useWishlistStore } from '../stores/wishlist';
import { storeToRefs } from "pinia";
import { RouterLink, RouterView } from "vue-router";


export default {
    name: "wishlistview",
    data () {
      return {
        wishlist_items: []
    }
  },
  setup() {
    const items  = storeToRefs(useWishlistStore())
    return { items }
  },
  mounted() {
    this.wishlist_items = this.items['items']
  },
  methods: {
    addNewItem() {
        this.$router.push({name: 'wishlist_item'});
    }
  }
  
};
</script>

<template>
<h1>Your Wishlist</h1>
 <table>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Mininum Price (USD)</th>
      <th>Maximum Price (USD)</th>
    </tr>
    <tr v-for="item in this.wishlist_items" :key="item.make">
        <td> {{item.make}} </td>
        <td> {{item.model}} </td>
        <td> {{item.minPrice}} </td>
        <td> {{item.maxPrice}}</td>
  </tr>
  </table>
  <button type="button" @click="addNewItem()">New Item</button>
</template>