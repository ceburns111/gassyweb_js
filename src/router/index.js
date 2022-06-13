
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingsView from "../views/ListingsView.vue";
import Listing from "../components/Listing.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/listings",
      name: "listings",
      component: ListingsView
    },
    {
      path: "/listing",
      name: "listing",
      component: Listing
    }
  ],
});

export default router;
