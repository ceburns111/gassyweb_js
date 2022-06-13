<script>
import ListingService from '../Services/listingservice';
export default {
    name: "Listings",
    data () {
      return {
        listings: [],
    }
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
  <div v-for="listing in listings" :key="listing.id">
    <li>{{listing.make}}</li>
  </div>
</template>