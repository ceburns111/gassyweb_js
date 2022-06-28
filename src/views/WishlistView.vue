<script>
//import { useWishlistStore } from '../stores/wishlist';
// import { storeToRefs } from 'pinia';



export default {
    name: "wishlistview",
    data () {
      return {
        items: []
    }
  },
  // setup() {
  //   const wishlistStore = useWishlistStore();
  //   return { wishlistStore }
  // },
  // mounted() {
  //   this.items = await this.wishlistStore.getItems(); 
  // }
};
</script>

<template>
  <table>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Min Price</th>
      <th>Max Price</th>
    </tr>
    <tr>
    </tr>
  </table>
  <table>
  <!-- <tr v-for="item in this.items" :key="item.make">
        <td> {{item.make}} </td>
  </tr>  -->
  </table>
</template>