<script>
// import { useWishlistStore } from '../stores/wishlist';
export default {
    name: "wishlistview",
    data () {
      return {
    }
  },
  mounted() {
  },
  methods: {
    // addNewItem() {
    //     this.$router.push({name: 'wishlist_item'});
    // },
  }
  
};
</script>

<template>
<h1>wishlist placeholder</h1>
<!-- <h1>Your Wishlist</h1>
 <table>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Mininum Price (USD)</th>
      <th>Maximum Price (USD)</th>
      <th>Category</th>
    </tr>
    <tr v-for="item in wishlistStore.items" :key="item.make">
        <td> {{item.make}} </td>
        <td> {{item.model}} </td>
        <td> ${{item.minPrice}} </td>
        <td> ${{item.maxPrice}}</td>
        <td> {{item.category}} </td>
  </tr>
  </table>
  <button class= "addNew" type="button" @click="addNewItem()">Add an item!</button> -->
</template>

<style>
  .addNew {
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  padding: 0.4ch;
  align-items: right;
}
</style>