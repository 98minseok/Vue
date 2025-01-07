<template>
    <span>{{ counter_header }}</span>
    <button @click ="count++" v-text ="count"></button>
    <hr/>
</template>
<script>
import { inject } from 'vue';

    export default{
        inject: ['counter-header'],
        setup(){
            const count = ref(0)
            return {count}
        }
    }
</script>