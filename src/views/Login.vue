<script>
import UserService from '../Services/userService';
export default {

    name: "Login",
    data () {
      return {
        input: {
            username: "",
            password: "",
            data: {},
            token: ""
        }
    }
  },
  userService: null,
  created() { 
    this.userService = new UserService(); 
  },
   methods: {
    login() {
      
        this.userService.authenticate(this.input.username, this.input.password).then(result => {
          this.data = result.data,
          this.token = result.data['token']
        });
        //if result = unautorized, do something
        //if result = okay, store the token...global state fun
        this.username = this.input.username;
        this.password = this.input.password;
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
