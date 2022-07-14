<script>
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia';
export default {
    name: 'user',
    data() {
        return {};
    },
    setup() {
        const userStore = useUserStore();
        const { role, username, email, token} = storeToRefs(userStore);
        return { role, username, email, token} 
  },        
}
</script>

<template>
    <div id="secure">
        <h1>{{username}}</h1>
        <ul>
            Role: {{role}}
        </ul>
        <ul>
            Email: {{email}}
        </ul>
    </div>
</template>


