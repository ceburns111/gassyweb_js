import { defineStore } from "pinia";
import UserService from "../Services/userService";


export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: "",
    role: ""
  }),
  getters: {
    // getAThing: (state ) => { //default param must be named state
    //   return state.token;
  //}
  },
  actions: {
    authenticateUser (userName, userPassword) {
      const userService = new UserService();
      userService.authenticate(userName, userPassword).then(result => { 
        this.token = result.data['token'],
        this.role = result.data['role']
      })
    },
  }
})

