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
        setup()
        {
            const checked = ref(false);
            const onClickDelete = (event) => {
                event.target.parentNode.remove();
            }
            const onClickChecked = (event) => {
                checked.value = !checked.value
            }
            return {onClickDelete, onClickChecked, checked}
        }
    }
</script>

<style scoped>
    .checked{
        text-decoration: line-through;
    }
</style>