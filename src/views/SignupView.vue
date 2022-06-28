<script>
import { useUserStore } from '../stores/user'
export default {
    name: "signup",
    data () {
      return {
        input: {
            username: "",
            password: "",
            email: ""
        }
    }
  },
  
  setup() {
  },
  created() { },
  methods: {
    register() {
      }
    }
}
</script>

<template>
        <h1>Sign Up!</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <input type="text" name="email" v-model="input.email" placeholder="Email" />
        <button type="button" @click="register()">Ok</button>
</template>
