<script>
import { useWishlistStore } from '../stores/wishlist';
import { storeToRefs } from "pinia";

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
    //this.wishlist_items.push(items[0])
  }
  
};
</script>

<template>
<a>{{this.items}}</a>
  <!-- <table>
  <tr v-for="item in items" :key="item.make">
        <td> {{item.make}} </td>
  </tr> 
  </table> -->
</template>