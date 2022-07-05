
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingsView from "../views/ListingsView.vue";
import ListingView from "../views/ListingView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import UserView from "../views/UserView.vue";
import WishlistView from "../views/WishlistView.vue";
import WishlistItemView from "../views/WishlistItemView.vue";
import { useUserStore } from '../stores/user'
import AboutView from "../views/AboutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView, },
    { path: "/about", name: "about", component: AboutView, },
    { path: "/listings", name: "listings", component: ListingsView },
    { path: "/listing/:id", name: "listing", component: ListingView },
    { path: "/wishlist", name: "wishlistview", component: WishlistView },
    { path: "/wishlist_item", name: "wishlist_item", component: WishlistItemView },
    { path: "/login", name: "login", component: LoginView },
    { path: "/signup", name: "signup", component: SignupView },
    { path: "/user/:username", name: "user", component: UserView }
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/about', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useUserStore()
  if (authRequired && !auth.id) {
    auth.returnUrl = to.fullPath;
    return '/login';
  }
})

export default router;
