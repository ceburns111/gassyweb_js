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

    <Input-Text type="text" name="username" v-model="input.username" placeholder="Username" />
    <Input-Text type="password" name="password" v-model="input.password" placeholder="Password" />
    <Input-Text type="text" name="firstname" v-model="input.firstname" placeholder="First Name" />
    <Input-Text type="text" name="lastname" v-model="input.lastname" placeholder="Last Name" />
    <Input-Text type="text" name="phonenumber" v-model="input.phonenumber" placeholder="Phone Number" />
    <Input-Text type="text" name="email" v-model="input.email" placeholder="Email" />
    <Button class="p-button-sm" type="button" @click="signup()">Create Account</Button>
  </div>

</template>

