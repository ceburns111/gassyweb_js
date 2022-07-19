<script>
import { accountService } from "../Services/accountService";

export default {
    name: "login",
    data () {
      return {
        input: {
            username: "",
            password: "",
            token: ""
        }
    }
  },
  setup() {
    
  },
  methods: {
    async login() {
      await accountService.login(this.input.username, this.input.password);
    }
  }
}
</script>

<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" @click="login()">Login</button>
  </div>
</template>

