<script>
import {wishlistService}  from '../Services/wishlistService';
import { accountService } from "../Services/accountService"
import { ref } from 'vue';
import { router } from '../router/router';


export default {
    name: "wishlist_item",
    data () {
      return {
        input: {
          make: "",
          model: "",
          itemCategory: "",
          minPrice: "",
          maxPrice: ""
        },
      }
  },   
  setup () {
      const account = ref(null);
      accountService.account.subscribe(x => account.value = x);
      
      return {
            account,
        }
    },
  methods: {
    async addNewItem() {
      console.log(`Adding new item for account..${JSON.stringify(this.account.id)}`);
      await wishlistService.addItem(this.account.id, this.input.make, this.input.model, this.input.itemCategory, this.input.minPrice, this.input.maxPrice)
      router.push('/wishlist')

      console.log("item added");
    }
  }
};
</script>

<template>
 <div id="addItem">
    <h2>Add Item</h2>
    <Input-Text type="text" name="make" v-model="input.make" placeholder="Make" />
    <Input-Text type="text" name="model" v-model="input.model" placeholder="Model" />
    <Input-Text type="text" name="category" v-model="input.itemCategory" placeholder="Category" />
    <Input-Text type="text" name="minPrice" v-model="input.minPrice" placeholder="Min Price" />
    <Input-Text type="text" name="maxPrice" v-model="input.maxPrice" placeholder="Max Price" />
    <Button class="p-button-sm" @click="addNewItem()">Add Item</Button>
  </div>
  <div></div>

</template>

