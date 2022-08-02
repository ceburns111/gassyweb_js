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
    async submitEdit() {
       await accountService.editAccount(this.account.id, this.account.firstName, this.account.lastName, this.account.email, "");
    },
    async deleteAccount() {
        await accountService.deleteAccount(this.account.id);
    }
   }
}
</script>


<template>
<h1>Edit Account</h1>
<div>
    <h3>Email</h3>
    <InputText v-model="account.email"/>
      <h3>Phone</h3>
    <h3>First Name</h3>
    <InputText v-model="account.firstName"/>
    <h3>Last Name</h3>
    <InputText v-model="account.lastName"/>
</div>
<div id="submitArea">
    <Button class="p-button-sm" @click="submitEdit()">Submit Changes</Button>
</div>
<div id="deleteArea">
    <Button class="p-button-sm" @click="deleteAccount()">Delete Account</Button>
</div>
</template>

<style scoped>
#submitArea {
    margin-top: 2%;
}
#deleteArea {
    margin-top: 2%;
}
</style>
