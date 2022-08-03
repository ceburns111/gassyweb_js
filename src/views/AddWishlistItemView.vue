<script>
import {wishlistService}  from '../Services/wishlistService';
import { accountService } from "../Services/accountService"
import { ref } from 'vue';
import { router } from '../router/router';
import AddWishlistItem from '../components/AddWishlistItem.vue';


export default {
    name: "add_wishlist_item",
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
    components: { AddWishlistItem }
};
</script>

<template>
<AddWishlistItem></AddWishlistItem>
</template>

