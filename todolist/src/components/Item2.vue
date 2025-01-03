<template>

    <span v-if ="!checked">{{ text }}</span>
    <span class ="checked" v-else>{{ text }}</span>
    <button @click ="onClickChecked">V</button>
    <button @click="onClickDelete">X</button>
</template>

<script>
    import { ref } from 'vue';
    export default{
        props : {
            text :{
                type : String,
                required: true,
            }
        },
        data() {
            return{
                checked : false
            }
        },
        methods : {
            onClickChecked : function(){
                this.checked = !this.checked
            },
            onClickDelete : function(event){
                event.target.parentNode.remove()
            }
        }

    }
</script>

<style scoped>
    .checked{
        text-decoration: line-through;
    }
</style>