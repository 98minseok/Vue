<template>
    <ol>
        <li v-for ="(item,index) in items">{{ item }} {{ index }}</li>
        <li v-for ="(value,key,index) in  objects">{{ value }} {{ key }} {{ index }}</li>
    </ol>
</template>
<script>
    import { reactive } from 'vue';
    export default{
        setup(){
            const items = reactive(["1번째 아이템","2번째 아이템","3번째 아이템"])

            const objects = reactive(
                {
                    1 : "첫번쨰 아이템",
                    2 : "두번째 아이템",
                    3 : "세번째 아이템",
                }
            )
            return{
                items, objects
            }
        }
    }
</script>