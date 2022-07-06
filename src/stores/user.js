import { defineStore } from "pinia";
import UserService from "../Services/userService";
import { useStorage } from "@vueuse/core";


export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    //username: "",
    username: useStorage("username", ""),
    email: useStorage("email", ""),
    role: useStorage("role", ""),
    token: useStorage("token", ""),
    id: useStorage("id", ""),
    loading: useStorage("loading", false),
    error: useStorage("error", null),
  }),
  getters: {
  },
  actions: {
    async authenticateUser (userName, userPassword) {
      this.loading = true; 
      const userService = new UserService();
      try {
        await (userService.authenticate(userName, userPassword)).then(result => { 
          this.token = result.data['token'],
          this.role = result.data['role'],
          this.username = result.data['userName'],
          this.id = result.data['id'],
          this.email = result.data['email']
        })
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
     //Adds new item to users wishlist
     async signup(userName, userPassword, email, phoneNumber, firstName, lastName) {
      try {
      const userService = new UserService();
      return await (userService.signup(userName, userPassword, email, phoneNumber, firstName, lastName));
      }
      catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.username = null; 
      this.id = null; 
      this.token = null; 
    }
  }
})

