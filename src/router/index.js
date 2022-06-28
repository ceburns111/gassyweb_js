
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingsView from "../views/ListingsView.vue";
import ListingView from "../views/ListingView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import UserView from "../views/UserView.vue";
import WishlistView from "../views/WishlistView.vue";

import AboutView from "../views/AboutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView, },
    { path: "/about", name: "about", component: AboutView, },
    { path: "/listings", name: "listings", component: ListingsView },
    { path: "/listing/:id", name: "listing", component: ListingView },
    { path: "/wishlist", name: "wishlistview", component: WishlistView },
    { path: "/login", name: "login", component: LoginView },
    { path: "/signup", name: "signup", component: SignupView },
    { path: "/user/:username", name: "user", component: UserView }
  ],
});


export default router;
