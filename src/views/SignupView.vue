<script>
import { accountService } from "../Services/accountService";

export default {
    name: "signup",
    data () {
      return {
        input: {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            phonenumber: "",
            email: ""
        }
    }
  },
  setup() {
    
  },
  methods: {
    async signup() {
      await accountService.signup(this.input.username, this.input.password, this.input.firstname, this.input.lastname, this.input.phonenumber, this.input.email);
    }
  }
}
</script>

<template>
  <div id="signup">
    <h1>Sign Up</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <input type="text" name="firstname" v-model="input.firstname" placeholder="First Name" />
    <input type="text" name="lastname" v-model="input.lastname" placeholder="Last Name" />
    <input type="text" name="phonenumber" v-model="input.phonenumber" placeholder="Phone Number" />
    <input type="text" name="email" v-model="input.email" placeholder="Email" />
    <button type="button" @click="signup()">Create Account</button>
  </div>
  <div>
  </div>
</template>

