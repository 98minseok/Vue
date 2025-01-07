<template>
  <MyTable :header ="header" :rows ="rows"></MyTable>
</template>

<script>
import MyTable from './components/MyTable.vue';
  export default{
    name : 'App', 
    setup(){
      const header = ['1번 제목','2번 제목']
      const rows = [
        [{data: '1번 내용'}, {data : '2번 내용'}],
        [{data : '1번 내용2', colspan : 2}],
        [{data : '1번 내용3', rowspan : 3},{data : "2번 내용3"}],
        [{data : '2번내용 4'}],
        [{data : '2번내용 5'}],
      ]
      return {
        header,rows,
      }
    },
    components : {
      MyTable
    }
  }
</script>

<style scoped>
</style>
