<script>
import { useUserStore } from '../stores/user'
import { RouterLink, RouterView } from "vue-router";


export default {
    name: "signup",
    data () {
      return {
        input: {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            email: "",
            phonenumber: "",
            
        }
    }
  },
  
  setup() {
     const userStore = useUserStore();
     return { userStore }
  },
  created() { },
  methods: {
    async signup() {
      await this.userStore.signup(
        this.input.username,
        this.input.password,
        this.input.email,
        this.input.phonenumber,
        this.input.firstname,
        this.input.lastname
        );   
        
      await this.userStore.authenticateUser(this.input.username, this.input.password);
      this.$router.push({name: 'user', params: { username: this.input.username }});
      }
    }
}
</script>


<template>
        <h1>Sign Up!</h1>
        <input type="text" name="firstname" v-model="input.firstname" placeholder="First Name" />
        <input type="text" name="lastname" v-model="input.lastname" placeholder="Last Name" />
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <input type="text" name="email" v-model="input.email" placeholder="Email" />
        <input type="text" name="phonenumber" v-model="input.phonenumber" placeholder="Phone Number" />
        <button type="button" @click="signup()">Ok</button>
</template>

