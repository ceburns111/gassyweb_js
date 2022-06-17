
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingsView from "../views/ListingsView.vue";
import Listing from "../views/Listing.vue"
import Login from "../views/Login.vue"
import User from "../views/User.vue"

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
      path: "/listing/:id",
      name: "listing",
      component: Listing
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/user/:username",
      name: "User",
      component: User
    }
  ],
});

export default router;
