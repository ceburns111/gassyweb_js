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
  <div>
    <h1>Login</h1>
    <Input-Text type="text" name="username" v-model="input.username" placeholder="Username" />
    <Input-Text type="password" name="password" v-model="input.password" placeholder="Password" />
    <Button class="p-button-sm" type="button" @click="login()">Login</Button>
  </div>
  <div>
  </div>
</template>

