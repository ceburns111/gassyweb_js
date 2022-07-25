<script>
import ListingService from '../Services/listingservice';
import { accountService } from "../Services/accountService"

export default {
    name: "listings",
    data () {
      return {
        listings: [],
    }
  },
   setup() {
  },        
  listingService: null,
  methods: {
    capitalize(str) {
      return str[0].toUpperCase() + str.substring(1);
    }
  },
  created() { 
    this.listingService = new ListingService();
  },
   mounted() {
    this.listingService.getListingsAll().then(result => this.listings = result.data)
  },
};
</script>

<template>
<DataTable :value="this.listings">
  <Column field="category" header="Category"></Column>
  <Column field="make" header="Make"></Column>
  <Column field="model" header="Model"></Column>
  <Column field="price" header="Price"></Column>
  <Column field="shipping" header="Shipping"></Column>
  <Column field="itemDescription" header="Description"></Column>
  <Column field="offersEnabled" header="Accepts Offers"></Column>
  <Column field="link" header="Link"></Column>
  <Column field="listingCreatedAt" header="Created"></Column>
  <Column field="listingPublishedAt" header="Published"></Column>

</DataTable>  
</template>

<style scoped></style>


    