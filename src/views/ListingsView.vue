<script>
import axios from 'axios';

export default {
    name: "Listings",
    data () {
      return {
        listings: [],
    }
  },

  methods: {},

  mounted() {
    axios({ method: "GET", "url": "http://localhost:5200/ReverbListings/All" }).then(result => {
      this.listings=result.data;
    }, error => {
      console.error(error);
    });
  },
  

};
</script>

<template>
  <div v-for="listing in listings" :key="listing.id">
    <li>{{listing.make}}</li>
  </div>
</template>