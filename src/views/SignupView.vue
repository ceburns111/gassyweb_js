<script>
import { accountService } from "../Services/accountService";
import {router} from "../router/router"

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
        },
        errors: []
    }
  },
  methods: {
    async signup() {
      this.errors = [];
      if (!this.input.username) {
        this.errors.push('Username is required')
       
      }

      if (!this.input.password) {
        this.errors.push('Password is required')
       
      }

       if (!this.input.firstname) {
        this.errors.push('First Name is required')
      }

       if (!this.input.lastname) {
        this.errors.push('Last Name is required')
      }
       if (!this.input.phonenumber) {
        this.errors.push('Phone Number is required')
      }

       if (!this.input.email) {
        this.errors.push('Email Address is required')
      }

      if (this.errors.length > 0) {
        return;
      }

      await accountService.signup(this.input.username, this.input.password, this.input.firstname, this.input.lastname, this.input.phonenumber, this.input.email);
    
      
    }
  }
}
</script>

<template>
  <div id="signup">
    <h1>Sign Up</h1>
    <InputText type="text" name="username" v-model="input.username" placeholder="Username" />
    <InputText type="password" name="password" v-model="input.password" placeholder="Password" />
    <InputText type="text" name="firstname" v-model="input.firstname" placeholder="First Name" />
    <InputText type="text" name="lastname" v-model="input.lastname" placeholder="Last Name" />
    <InputText type="text" name="phonenumber" v-model="input.phonenumber" placeholder="Phone Number" />
    <InputText type="text" name="email" v-model="input.email" placeholder="Email" />
    <Button class="p-button-sm" type="button" @click="signup()">Create Account</Button>
  </div>
  <transition-group name="p-message" tag="div">
    <Message v-for="error in this.errors" :key="error">{{error}}</Message>
  </transition-group>
</template>

