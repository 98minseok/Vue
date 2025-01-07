<template>
     <h3 v-text = "title"></h3>
     <p v-for="i in data" :key="i">{{ i }}</p>
</template>
<script>
import { ref } from 'vue';

    export default{
 
    props : {
        title : {
            type : String,
            required : true,
            validator : function (value) {
                return typeof value == String
            },
        },
        data : {
            type : Object,
            default : () => {
                return []
            },
        },
    },
    setup(){
        const count = ref(0)
        return count
    },           
    }
</script>