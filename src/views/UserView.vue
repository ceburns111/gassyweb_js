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
        const { role } = storeToRefs(userStore);
        return { role } 
  },        
}
</script>

<template>
    <div id="secure">
        <h1>Welcome</h1>
        <p>
            Role: {{role}}
        </p>
    </div>
</template>


