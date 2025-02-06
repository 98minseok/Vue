<template>
  <div class="left-menu-bar-section">
    <RouterLink v-for="component in components" :to="`/${component}`" :key ="component">
      {{ component }}
    </RouterLink>
  </div>
</template>

<script setup>
import { useGlob } from '@/compositions/glob';
import { RouterLink } from 'vue-router';

const {files} = useGlob("components/home")
const components = Object.keys(files).map((filePath) => {
  return filePath.split("/").pop().replace(".vue","")
})

console.log(components);

</script>

<style scoped>
  .left-menu-bar-section{
    position:fixed;
    left:0px;
    border-right:1px solid black;
    height:100%;
    top:50px;
    padding:20px;
    display:flex;
    flex-direction: column;
  }
</style>
