<template>
    <p>{{ `[${msg}] : ${msg2}` }}</p>
    <Component v-model:msg="msg" v-model:msg2="msg2"></Component>
</template>

<script>
    import Component from './Component.vue';
    export default{
        data(){
            return {
                msg : '초기 메시지',
                msg2 : '초기 메시지2',
            }
        }
        ,
        components : {
            Component,
        }
    }
</script>