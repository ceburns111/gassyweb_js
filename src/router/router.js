
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingsView from "../views/ListingsView.vue";
import LoginView from "../views/LoginView.vue";
import WishlistView from "../views/WishlistView.vue";
import AddWishlistItemView from "../views/AddWishlistItemView.vue";
import EditWishlistItemView from "../views/EditWishlistItemView.vue";

import SignupView from "../views/SignupView.vue";
import AccountView from "../views/AccountView.vue";
import { authGuard } from "../helpers/authGuard"

const routes = [
    { path: "/", name: "home", component: HomeView },    
    { path: "/login", name: "login", component: LoginView },
    { path: "/signup", name: "signup", component: SignupView},
    { path: "/listings", name: "listings", component: ListingsView, },
    { path: "/account", name: "account", component: AccountView, beforeEnter: authGuard },
    { path: "/wishlist", name: "wishlistview", component: WishlistView,  beforeEnter: authGuard },
    { path: "/add_wishlist_item", name: "add_wishlist_item", component: AddWishlistItemView,  beforeEnter: authGuard },
    { path: "/edit_wishlist_item/:id", name: "edit_wishlist_item", component: EditWishlistItemView,  beforeEnter: authGuard },
  ];
  

  export const router = createRouter({
    history: createWebHistory(),
    routes
});

