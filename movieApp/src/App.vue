<script setup>
import { ref } from 'vue';
import FeeTable from './components/FeeTable.vue';
import { useUserStore } from './store/user';

const { getUserData } = useUserStore();
const userData = ref(getUserData());

</script>

<template>
  <main>
    <FeeTable :userData = "userData"></FeeTable>
  </main>

</template>

<style scoped>
  main{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100%;
  }
</style>
