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
    loading: false,
    error: null
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
    }
  }
})

