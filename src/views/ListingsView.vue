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
  computed: {
    listingKeys() {
      return Object.keys(listings[0]);
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
    <tr v-for="listing in listings" :key="listing.id">
      <td v-for="(value) in listing" :key="listing.value">
        {{value}}
      </td>
    </tr>
  </table>
</template>