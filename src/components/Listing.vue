<script>
import ListingService from '../Services/listingservice';
export default {
    name: "Listing",
    props: {
        listingId: Number
    },
    data () {
      return {
        listing: {},
    }
  },
  listingService: null,
  created() { 
    this.listingService = new ListingService();
  },
   mounted() {
    this.listingService.getListingById(this.listingId).then(result => this.listings = result.data)
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

