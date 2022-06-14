<script>
import ListingService from '../Services/listingservice';

export default {
    name: "Listing",
    data () {
      return {
        listing: {}
    }
  },
  listingService: null,
  created() { 
    this.listingService = new ListingService();
  },
   mounted() {
    this.listingService.getListingById(this.$route.params.id).then(result => this.listing = result.data)
  },
};
</script>

<template>
    <tr>
        <td> {{ listing.make }} </td>
        <td> {{ listing.model }} </td>
        <td> {{ listing.price }} </td>
        <td> {{ listing.shipping }} </td>
        <td> {{ listing.itemDescription }} </td>
        <td> {{ listing.itemCondition }} </td>
        <td> {{ listing.offersEnabled }} </td>
        <td> {{ listing.link }} </td>
        <td> {{ listing.listingCreatedAt }} </td>
        <td> {{ listing.listingPublishedAt }} </td>
    </tr>
</template>

