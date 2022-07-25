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
  <table>
    <tr>
      <th>Category</th>
      <th>Make</th>
      <th>Model</th>
      <th>Price</th>
      <th>Shipping</th>
      <th>Condition</th>
      <th>Description</th>
      <th>Link</th>
      <th>Created At</th>
      <th>Published At</th>
    </tr>
    <tr v-for="listing in listings" :key="listing.id">
        <td> {{ capitalize(listing.category) }} </td>
        <td> {{ capitalize(listing.make) }} </td>
        <td> {{ capitalize(listing.model) }} </td>
        <td> ${{ listing.price }} </td>
        <td> ${{ listing.shipping }} </td>
        <td> {{ listing.itemDescription }} </td>
        <td> {{ listing.itemCondition }} </td>
        <td> {{ listing.offersEnabled }} </td>
        <td> {{ listing.link }} </td>
        <td> {{ listing.listingCreatedAt }} </td>
        <td> {{ listing.listingPublishedAt }} </td> 
    </tr>
  </table>
</template>


    