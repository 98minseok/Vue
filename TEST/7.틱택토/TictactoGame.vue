<template>
        <table-component :table-data="tableData">
        </table-component>
    <p v-if="winner">{{ isDraw }}</p>
    <p v-else="">{{ turn }}님의 차례입니다.</p>
</template>

<script>
    import TableComponent from './TableComponent.vue';
    import Vue from 'vue'
    export default{
        components : {
            TableComponent
        },
        data (){
            return{
                tableData : [
                    ['','',''],
                    ['','',''],
                    ['','',''],
                ],
                turn : 'O',
                winner : '',
            }
        },
        computed : {
            isDraw : function(){
                return this.winner == "무승부" ? "무승부" : this.winner + "님의 승리입니다."
            }
        }
    }
</script>

<style>
    table{
        border-collapse: collapse;
    }
    td{
        border:1px solid black;
        width: 100px;
        height : 100px;
        text-align : center;
        box-sizing:border-box;
    }
</style>
