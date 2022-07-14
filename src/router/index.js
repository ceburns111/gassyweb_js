
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
import UserService from "../Services/userService";
import { storeToRefs } from 'pinia';


import axios from 'axios';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView, },
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
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useUserStore()
  if (authRequired && !auth.id) {
    auth.returnUrl = to.fullPath;
    return '/login';
  }
});

// axios.interceptors.request.use(
//   function (config) {
//     ///before request sent do something 
//     console.log("config: " + config.url);
//     return config;
// },
// function (error) {
//   // Do something with request error
//   return Promise.reject(error.toJSON());
// });


// axios.interceptors.response.use(
//   function(successRes) {
//     return successRes;
//   }, 
//   function(error) {
//       if (error.response.status === 401)
//       {
//         console.log("Funnauthorized response...attempting to refresh JWT token")
//          const userStore = useUserStore();
//          //userStore.refreshToken();
//       }
//       return Promise.reject(error.toJSON());

//   }
// );

export default router;
