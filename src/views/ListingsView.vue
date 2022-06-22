<script>
import ListingService from '../Services/listingservice';
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';
export default {
    name: "listings",
    data () {
      return {
        listings: [],
    }
  },
   setup() {
        const userStore = useUserStore();
        const { role, token } = storeToRefs(userStore);
        return { role, token } 
  },        
  listingService: null,
  methods: {},
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
        <td> {{listing.make}} </td>
        <td> {{ listing.model }} </td>
        <td> {{ listing.price }} </td>
        <td> {{ listing.shipping }} </td>
        <td> {{ listing.itemDescription }} </td>
        <td> {{ listing.itemCondition }} </td>
        <td> {{ listing.offersEnabled }} </td>
        <td> {{ listing.link }} </td>
        <td> {{ listing.listingCreatedAt }} </td>
        <td> {{ listing.listingPublishedAt }} </td> 
        <td><router-link :to="`/listing/${listing.reverbId}`"> More Info </router-link></td>
    </tr>
  </table>
</template>