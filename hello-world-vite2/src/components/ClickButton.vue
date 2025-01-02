<template>
    <p>{{ counter + counter2 }}</p>
    <button @click ="onClick2">counter ++</button>
    <button @click="onClick">counter2 ++</button>
</template>

<script>
    import {ref} from 'vue'
    export default{
        data() {
            return{
                counter2 : 0
            }
        },

        setup() {
            const counter = ref(0)
            const onClick = (event) => {
                if(event){
                    event.preventDefault()
                    counter.value++;
                }
                
            }
            return{
                counter,
                onClick,
            }
        }
        ,

        methods : {
            onClick2 : function(event) {
                if(event){
                    event.preventDefault()
                    this.counter2++
                }
            }
            
        }
    }
</script>