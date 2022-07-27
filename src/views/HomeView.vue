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
     setup() {
      const account = ref(null);
      accountService.account.subscribe(x => account.value = x);

      return {
            account,
            logout: accountService.logout,
        }
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
  <Card id="mainCard">
    <template #header>
      <WelcomeToGassy></WelcomeToGassy>
        <div v-if="account === null">
          <a @click="toSignup()">Not a member? Sign up here.</a>
        </div>
    </template>
  </Card> 
</main>
</template>

<style scoped>
#mainCard {
  margin-top: 2%;
  vertical-align:auto;
  text-align: center;
}
</style>

