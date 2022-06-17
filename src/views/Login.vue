<script>
import { useUserStore } from '../stores/user'
export default {
    name: "Login",
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
    const userStore = useUserStore();
    return { userStore }
  },
  created() { },
  methods: {
    login() {
      this.userStore.authenticateUser(this.input.username, this.input.password);

      // this.userService.authenticate(this.input.username, this.input.password)
      //   .then(result => { this.token = result.data['token']})
      
      this.$router.push({name: 'User', params: { username: this.input.username}});
        
        
        // //if result = unautorized, do something
        // //if result = okay, store the token...global state fun
        // this.username = this.input.username;
        // this.password = this.input.password;
        }
    }
}
</script>

<template>
    <div id="login">
        <h1>Login</h1>
        <h2>{{token}}</h2>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" @click="login()">Login</button>
    </div>
</template>
