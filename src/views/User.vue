<script>
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia';
export default {
    name: 'User',
    data() {
        return {};
    },
    setup() {
        const userStore = useUserStore();
        const { role } = storeToRefs(userStore);
        return { role } 
  },        
}
</script>

<template>
    <div id="secure">
        <h1>Welcome {{role}}</h1>
        <p>
            This is your user page. 
        </p>
    </div>
</template>


