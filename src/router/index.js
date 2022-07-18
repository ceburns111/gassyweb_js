
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingsView from "../views/ListingsView.vue";
import ListingView from "../views/ListingView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import UserView from "../views/UserView.vue";
import WishlistView from "../views/WishlistView.vue";
import WishlistItemView from "../views/WishlistItemView.vue";
import { authGuard  } from "../helpers/authGuard";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/listings", name: "listings", component: ListingsView, beforeEnter: authGuard},
    { path: "/listing/:id", name: "listing", component: ListingView, beforeEnter: authGuard },
    { path: "/wishlist", name: "wishlistview", component: WishlistView, beforeEnter: authGuard },
    { path: "/wishlist_item", name: "wishlist_item", component: WishlistItemView, beforeEnter: authGuard},
    { path: "/login", name: "login", component: LoginView },
    { path: "/signup", name: "signup", component: SignupView },
    { path: "/user/:username", name: "user", component: UserView , beforeEnter: authGuard},
    //otherwise, redirect to home
    { path: '/:pathMatch(.*)*', redirect: '/' }

  ],
});


export default router;
