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
    // const userStore = useUserStore();
    // const { useStore } = storeToRefs(userStore);
    //     return { useStore } 
  },
  created() { },
  methods: {
    login() {
      // this.userStore.authenticateUser(this.input.username, this.input.password);
      // this.$router.push({name: 'User', params: { username: this.input.username}});
      }
    }
}
</script>

<template>
        <h1>Sign Up!</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <input type="text" name="email" v-model="input.email" placeholder="Password" />

        <button type="button" @click="login()">Register!</button>
</template>
