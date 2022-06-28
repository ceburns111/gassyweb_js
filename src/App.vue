<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
export default {
   name: "App",
    data () {
      return {
    }
  },
  components: {
    Navbar 
  },
}
</script>

<template>
  <Navbar></Navbar>
</template> 

<style>
@import "@/assets/base.css";

</style>