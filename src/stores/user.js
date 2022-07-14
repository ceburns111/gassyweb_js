import { defineStore } from "pinia";
import UserService from "../Services/userService";
import { useStorage } from "@vueuse/core";


export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: JSON.parse(localStorage.getItem(('user'))),
    returnUrl: null
  }),
  getters: {
    oldToken() {
      return state.token; 
    }
  },
  actions: {
    async login (userName, userPassword) {
      const userService = new UserService();
      const user = await (userService.authenticate(userName, userPassword)).then(result => result.data);
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user(user)));

      // this.loading = true; 
      // const userService = new UserService();
      // try {
      //   await (userService.authenticate(userName, userPassword)).then(result => { 
      //     this.token = result.data['token'],
      //     this.role = result.data['role'],
      //     this.username = result.data['userName'],
      //     this.id = result.data['id'],
      //     this.email = result.data['email']
      //   })
      // } catch (error) {
      //   this.error = error;
      // } finally {
      //   this.loading = false;
      // }
    },
     
    logout() {
      this.user = null;
      localStorage.removeItem('user');
    },

    // async signup(userName, userPassword, email, phoneNumber, firstName, lastName) {
    //   try {
    //   const userService = new UserService();
    //   return await (userService.signup(userName, userPassword, email, phoneNumber, firstName, lastName));
    //   }
    //   catch (error) {
    //     this.error = error;
    //   } finally {
    //     this.loading = false;
    //   }
    // },
  }
})
