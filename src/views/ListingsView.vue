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
<div id="title">
<h1>Listings</h1>
</div>
<DataTable :value="listings">
  <Column class="col" field="category" header="Product Category"></Column>
  <Column field="make" header="Make"></Column>
  <Column field="model" header="Model"></Column>
  <Column field="price" header="Price"></Column>
  <Column field="shipping" header="Shipping"></Column>
  <Column field="itemCondition" header="Condition"></Column>
  <Column field="itemDescription" header="Description"></Column>
  <Column field="link" header="Link"></Column>
  <Column field="listingCreatedAt" header="Created"></Column>
  <Column field="listingPublishedAt" header="Published"></Column>
</DataTable>
</template>

<style scoped>
#title {
  display: block;

}
</style>


    