<template>
    <GuestBookItem v-for ="data in searchedData" :data="data"></GuestBookItem>
    <GuestBookSearch>
    </GuestBookSearch>
</template>
<script>
    import { inject } from 'vue';
import GuestBookSearch from './GuestBookSearch.vue';
import { provide } from 'vue';
import GuestBookItem from './GuestBookItem.vue';
    export default{
        setup(){
            const searchedData = inject('guestbooks')
            provide('searched-data',searchedData)

            return {
                searchedData
            }
        },
        components : {
            GuestBookSearch,
            GuestBookItem
        }
    }
</script>