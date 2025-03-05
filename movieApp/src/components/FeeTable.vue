<template>
    <button>저장</button>
    <button>되돌리기</button>
    <table>
        <thead>
            <tr>
                <th>이름</th>
                <th v-for="num in 12">
                    {{ num }}월
                </th>
                <th>합계</th>
            </tr>
        </thead>
        <tbody>
            <!-- v-for로 FeeRow 반복 -->
            <FeeRow v-for="user in userData" :key="user.id" :user="user" />
        </tbody>
    </table>
</template>

<script setup>
import FeeRow from './FeeRow.vue';

defineProps({
    userData : Array
})
</script>

<style>
    table,th,td{
        border-collapse: collapse;
        border : 1px solid black;
    }
    th,td{
        padding : 10px;
        width : 100px;
    }
</style>
