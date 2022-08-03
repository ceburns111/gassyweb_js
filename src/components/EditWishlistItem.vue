<script>
import {wishlistService}  from '../Services/wishlistService';
import { accountService } from "../Services/accountService"
import { ref } from 'vue';
import { router } from '../router/router';
import { useRoute } from 'vue-router';


export default {
     data () {
      return {
        input: {
          id: "",
          make: "",
          model: "",
          itemCategory: "",
          minPrice: "",
          maxPrice: ""
        },
        errors: [],
      }
  }, 
   setup () {
    const account = ref(null);
    accountService.account.subscribe(x => account.value = x);
    return { account }
    },
  async mounted() {
    const route = useRoute();
    const wishlistItem = await wishlistService.getItem(route.params.id);
    this.input.id = wishlistItem.data.id; 
    this.input.make = wishlistItem.data.make;
    this.input.model = wishlistItem.data.model;
    this.input.itemCategory = wishlistItem.data.category;
    this.input.minPrice = wishlistItem.data.minPrice;
    this.input.maxPrice = wishlistItem.data.maxPrice; 
    },
    methods: {
    async editItem() {
      this.errors = [];

      if (!this.input.make) {
          this.errors.push('Make is required')
      }
       if (!this.input.model) {
          this.errors.push('Model is required')
      }
       if (!this.input.itemCategory) {
          this.errors.push('Category is required')
      }
       if (!this.input.minPrice) {
          this.errors.push('Minimum Price is required')
      }
       if (!this.input.maxPrice) {
          this.errors.push('Maximum Price is required')
      }

      if (this.errors.length > 0) {
        return; 
      }

      console.log(`Adding new item for account..${JSON.stringify(this.account.id)}`);
      await wishlistService.updateItem(this.input.id, this.account.id, this.input.make, this.input.model, this.input.itemCategory, this.input.minPrice, this.input.maxPrice)
      console.log("Item Updated");
    },
    deleteItem() {

    }
  }
  
};
</script>

<template>
 <div id="editItem">
    <h2>Edit Item</h2>
    <InputText type="text" name="make" v-model="input.make" placeholder="Make" />
    <InputText type="text" name="model" v-model="input.model" placeholder="Model" />
    <InputText type="text" name="category" v-model="input.itemCategory" placeholder="Category" />
    <InputText type="text" name="minPrice" v-model="input.minPrice" placeholder="Min Price" />
    <InputText type="text" name="maxPrice" v-model="input.maxPrice" placeholder="Max Price" />
    <Button class="p-button-sm" @click="editItem()">Save</Button>
    <Button class="p-button-sm" @click="deleteItem()">Delete</Button>

  </div>
  <Message v-for="error in this.errors" :key="error">{{error}}</Message>
</template>

  