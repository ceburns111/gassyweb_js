<script>
import { useWishlistStore } from '../stores/wishlist';
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';


export default {
    name: "wishlist_item",
    data () {
      return {
         input: {
            make: "",
            model: "",
            minPrice: "",
            maxPrice: ""
        }
    }
  },
  setup() {
    const wishlistStore = useWishlistStore();
    const { id } = storeToRefs(useUserStore);
    return { wishlistStore, id}
  },
  mounted() {
    //Add method for getting a single wishlist item, if this route is passed an ID, otherwise display blank. 
  },
  methods: {
    async addnew() {
      await (this.wishlistStore.addItem(this.input.make, this.input.model, this.input.minPrice, this.input.maxPrice));
      await (this.wishlistStore.getItems());
      this.$router.push({name: 'wishlistview'});      
    }
  }
  
};
</script>

<template>
  <div id="addNewItem">
    <h1 v-if="input.make != ''">{{input.make}} {{input.model}}</h1> 
    <h1 v-else>New Item</h1>  
      <input type="text" name="make" v-model="input.make" placeholder="Make" />
      <input type="text" name="model" v-model="input.model" placeholder="Model" />
      <input type="text" name="minPrice" v-model="input.minPrice" placeholder="Min Price" />
      <input type="text" name="maxPrice" v-model="input.maxPrice" placeholder="Max Price" />
      <button class= "addNew" type="button" @click="addnew()">Ok</button>
  </div>
</template>

<style>
  .addNew {
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  padding: 0.4ch;
  align-items: right;
}
</style>
<!-- 
   <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" @click="login()">Login</button>
    </div> -->
