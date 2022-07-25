<script>
import { router } from '../router/router';
import WelcomeToGassy from '@/components/WelcomeToGassy.vue';
import { accountService } from "../Services/accountService"
import { ref } from 'vue';


export default {
    name: "home",
    data() {
        return {};
    },
    components: { WelcomeToGassy },
    methods: {
      toSignup() {
        router.push('/signup');
      }
    }
}
</script>

<template>
<main>
  <WelcomeToGassy></WelcomeToGassy>
  <div>
  <Button @click="toSignup()">Sign up here</Button>
  </div>
  
</main>
</template>

<style>

</style>

