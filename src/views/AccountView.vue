<script>
import { ref } from 'vue';
import { router } from '../router/router';
import { useRoute } from 'vue-router';
import { accountService } from "../Services/accountService"

export default {
    name: "account",
    data () {
      return {
        input: {
            username: null
        },
        }
    },
    setup () {
    const account = ref();
    account.value = accountService.accountValue;
         return {
            account
            }
   },
   methods: {
    submitEdit() {
        
    }
   }
}
</script>


<template>
<h2>Edit Account</h2>
<div>
<InputText v-model="account.userName"/>
<InputText v-model="account.email"/>
<InputText v-model="account.firstName"/>
<InputText v-model="account.lastName"/>

<Button class="uEdit" @click="saveChanges()">Submit</Button>


</div>
</template>

<style scoped>
.uEdit {
    background-color: white;

}
</style>
