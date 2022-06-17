<script>
import { useUserStore } from '../stores/user'
    export default {
        name: 'User',
        data() {
            return {};
        },
        setup() {
            const userStore = useUserStore();
            return { userStore }
  },        
    }
</script>

<template>
    <div id="secure">
        <h1>Welcome {{this.$route.params.username}}</h1>
        <p>
            This is your home page.
        </p>
    </div>
</template>


