<template>
    <p>{{ counter }}</p>
    <p v-if = "counter > 5">숫자가 5보다 크다</p>
    <p v-else>숫자가 5보다 작다</p>
    <button @click = "onClick">숫자증가</button>
</template>



<script>
    import {ref} from 'vue'
    export default{
        setup(){
            let counter = ref(0)
            const onClick = () => {
                counter.value++
            }
            return{
                counter,onClick
            }
    }
    }
</script>