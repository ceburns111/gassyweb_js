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
        },
        errors: []
    }
  },
  setup() {
    
  },
  methods: {
    async login() {
      this.errors = [];
      if (!this.input.username) {
        this.errors.push('Username is required')
       
      }

      if (!this.input.password) {
        this.errors.push('Password is required')
       
      }

       if (this.errors.length > 0) {
        return;
      }
      
      await accountService.login(this.input.username, this.input.password);
    }
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    
    <InputText type="text" name="username" v-model="input.username" placeholder="Username" />
    <InputText type="password" name="password" v-model="input.password" placeholder="Password" />
    <Button class="p-button-sm" type="button" @click="login()">Login</Button>
  </div>
  <transition-group name="p-message" tag="div">
    <Message v-for="error in this.errors" :key="error">{{error}}</Message>
  </transition-group>
</template>

