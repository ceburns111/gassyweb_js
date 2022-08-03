<script>
import {wishlistService}  from '../Services/wishlistService';
import { accountService } from "../Services/accountService"
import { ref } from 'vue';
import { router } from '../router/router';
import EditWishlistItem from '../components/EditWishlistItem.vue';


export default {
    name: "edit_wishlist_item",
    data() {
        return {
            input: {
                make: "",
                model: "",
                itemCategory: "",
                minPrice: "",
                maxPrice: ""
            },
            errors: [],
        };
    },
    setup() {
        const account = ref(null);
        accountService.account.subscribe(x => account.value = x);
        return {
            account,
        };
    },
    methods: {},
    components: { EditWishlistItem }
};
</script>

<template>
<EditWishlistItem></EditWishlistItem>
</template>

