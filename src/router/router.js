
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingsView from "../views/ListingsView.vue";
import LoginView from "../views/LoginView.vue";
import WishlistView from "../views/WishlistView.vue";
import WishlistItemView from "../views/WishlistItemView.vue";
import SignupView from "../views/SignupView.vue";
import AccountView from "../views/AccountView.vue";
import { authGuard } from "../helpers/authGuard"

const routes = [
    { path: "/", name: "home", component: HomeView },    
    { path: "/login", name: "login", component: LoginView },
    { path: "/signup", name: "signup", component: SignupView},
    { path: "/account", name: "account", component: AccountView, beforeEnter: authGuard },
    { path: "/listings", name: "listings", component: ListingsView, beforeEnter: authGuard },
    { path: "/wishlist", name: "wishlistview", component: WishlistView,  beforeEnter: authGuard },
    { path: "/wishlist_item", name: "wishlist_item", component: WishlistItemView,  beforeEnter: authGuard },
  ];
  

  export const router = createRouter({
    history: createWebHistory(),
    routes
});

