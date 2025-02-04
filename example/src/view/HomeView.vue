<script setup>
import LeftMenuBar from '@/components/LeftMenuBar.vue';

</script>

<template>
  <div class ="home-container">
    <LeftMenuBar style="width:240px">
    </LeftMenuBar>
    <router-view v-slot ={Component,route}>
      <h2>
        {{ route.name }}
      </h2>

    <component :is="Component"></component>
  </router-view>
  </div>

</template>

<style scoped>
  .home-container{
    display:flex;
  }
</style>
