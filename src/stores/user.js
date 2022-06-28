import { defineStore } from "pinia";
import UserService from "../Services/userService";

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    username: "",
    email: "",
    role: "",
    token: "",
    id: "",
  }),
  getters: {
  },
  actions: {
    authenticateUser (userName, userPassword) {
      const userService = new UserService();
      userService.authenticate(userName, userPassword).then(result => { 
        this.token = result.data['token'],
        this.role = result.data['role'],
        this.username = result.data['userName'],
        this.id = result.data['id'],
        this.email = result.data['email']
      })
    }
  }
})

