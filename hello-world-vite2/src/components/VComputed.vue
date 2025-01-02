<template>
    <p>Large Array</p>
    <ol>
        <li v-for ="item in largeArray" :key ="item.id"> {{ item }} </li>
    </ol>

    <p>Small Array</p>
    <ol>
        <li v-for ="item in smallArray" :key = "item.id"> {{ item }} </li>
    </ol>

    <p>Large Array</p>
    <ol>
        <li v-for ="item in bigArray_t" :key ="item.id"> {{ item }} </li>
    </ol>

    <p>Small Array</p>
    <ol>
        <li v-for ="item in smallArray_t" :key = "item.id"> {{ item }} </li>
    </ol>
</template>

<script>
    import { reactive,computed } from 'vue'
    export default{

        setup(){
            const items = reactive([
                {id : 1, text : '1번 옵션 아이템'},
                {id : 2, text : '2번 옵션 아이템'},
                {id : 3, text : '3번 옵션 아이템'},
                {id : 4, text : '4번 옵션 아이템'},
                {id : 5, text : '5번 옵션 아이템'}
            ])


            const smallArray = computed(() => {
                return items.filter((item) => item.id < 3)
            })

            const largeArray = computed(() => {
                return items.filter((item) => item.id >= 3)
            })

            const items_t = [
                {id : 1, text : '1번 옵션 아이템'},
                {id : 2, text : '2번 옵션 아이템'},
                {id : 3, text : '3번 옵션 아이템'},
                {id : 4, text : '4번 옵션 아이템'},
                {id : 5, text : '5번 옵션 아이템'}
            ]

            const smallArray_t = reactive(items_t.filter((i) => i.id < 3))
            const bigArray_t = reactive(items_t.filter((i) => i.id >= 3))

            return{
                smallArray,
                largeArray,
                smallArray_t,
                bigArray_t,
            }
        }
    }
</script>