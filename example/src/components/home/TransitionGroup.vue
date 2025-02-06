<template>
  <button @click ="addItem">무작위 추가</button>
  <button @click ="removeItem">무작위 삭제</button>
  <TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</TransitionGroup>
</template>
<script setup>
import { ref } from 'vue';

  const items = ref([1,2,3,4,5]);
  let id = items.value.length+1

  const addItem = () => {

    const i = Math.round(Math.random() * items.value.length)
    items.value.splice(i,0,id++);
  }

  const removeItem = () => {
    const i = Math.round(Math.random() *items.value.length)
    items.value.splice(i,1);
  }
</script>

<style>
  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .list-leave-active {
  position: absolute;
}
</style>
