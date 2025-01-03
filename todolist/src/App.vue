<script setup>
import { reactive, ref } from 'vue';
import Item from './components/Item.vue';
import Item2 from './components/Item2.vue';
const items = reactive([])
const inputText = ref("")
const addItems = () => {
  if(inputText.value){
    items.push(inputText.value)
    inputText.value = ""
  }
}
</script>

<template>
  <input v-model = "inputText"/>  
  <button @click="addItems">TodoList 추가</button>
  <ul>
    <li v-for = "(item,index) in items" :key ="index"><Item2 :text ="item"></Item2></li>
  </ul>
</template>


<style scoped>
</style>
