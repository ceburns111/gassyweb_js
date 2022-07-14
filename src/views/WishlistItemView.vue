<script>
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
  mounted: {
    
  },
  methods: {
    async addnew() {
      // await (this.wishlistStore.addItem(this.input.make, this.input.model, this.input.minPrice, this.input.maxPrice));
      // this.$router.push({name: 'wishlistview'});      
    }
  }
  
};
</script>

<template>
<h1>wishlist item placeholder</h1>
</template>

