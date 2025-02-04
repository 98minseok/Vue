<template>
  <div class ="home-container">
    속성바인딩 테스트
  <div v-bind:id="dynamicId">
    v-bind:id ="dynamicId"
  </div>
  <div :id="dynamicId">
    :id = "dynamicId"
  </div>
  <div v-bind="objectOfAttrs">
    v-bind="objectOfAttrs"
  </div>
  </div>

</template>

<script setup>
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green; width:200px ; height:100px'
}
const dynamicId = "TEST"
</script>

<style scoped>
  #TEST{
    background-color: aqua;
    width:200px;
    height:100px;
  }
  .home-container{
    display:flex;
    gap:20px;
    flex-direction: column;
  }
  .home-container div{
    padding:10px;
  }
</style>
