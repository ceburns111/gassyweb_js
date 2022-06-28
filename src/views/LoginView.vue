<script>
import { useUserStore } from '../stores/user';
import { RouterLink, RouterView } from "vue-router";
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
    const userStore = useUserStore();   
    return { userStore };
  },
  created() { },
  methods: {
    login() {
      this.userStore.authenticateUser(this.input.username, this.input.password);
      this.$router.push({name: 'wishlistview'});
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
    <div id="signup">
      <RouterLink id="signup" to="/signup">Not a member? Sign up here!</RouterLink>    
    </div>
</template>

<style>
@import "@/assets/base.css";
.signup {
  text-align: right;
  font-size: 100;
}
</style>
