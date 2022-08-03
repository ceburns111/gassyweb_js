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
      router.push({name: 'add_wishlist_item'});
    },
    editItem(itemId) {
      router.push({name: 'edit_wishlist_item', params: {id: itemId}})
     
    }
  }
};
</script>

<template>
<h1>Your Wishlist</h1>
<div v-if="items.count != 0">
<DataTable :value="items">
  <Column field="category" header="Product Category"></Column>
  <Column field="make" header="Make"></Column>
  <Column field="model" header="Model"></Column>
  <Column field="minPrice" header="Min Price"></Column>
  <Column field="maxPrice" header="Max Price"></Column>
 <Column>
  <template #body="slotProps">
    <Button class="p-button-sm" @click="editItem(slotProps.data.id)">Edit</Button>
</template>
  </Column>
</DataTable>
</div>
<div v-else>
  <p>Looks Like your wishlist is empty!</p>
</div>
<a id="addMe" @click="addNewItem()">Add an item!</a>
</template>

<style scoped>
#addMe {
  font-size: large;
}
</style>