<template>
    <p> 줄임말과 원래말을 입력하세요 </p>
    <input type = "text" v-model="abbr"/>
    <input type = "text" v-model="normal"/>
    <hr/>
    <abbr v-bind:title="normal">{{ abbr }}</abbr>
</template>

<script>
    import {ref} from 'vue'

    export default{
        setup() {
            const abbr = ref("DOPT")
            const normal = ref("Dong Project Team")
            return{
                abbr,
                normal,
            }
        }
        
    }
</script>