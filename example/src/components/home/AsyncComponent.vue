<template>
  <div>
    <AsyncComp></AsyncComp>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import LoadingComponent from '../LoadingComponent.vue';
import ErrorComponent from '../ErrorComponent.vue';


  const AsyncComp = defineAsyncComponent({
    loader : () => import('./AttributeBind.vue'),

    loadingComponent : LoadingComponent,
    delay : 1,

    errorComponent : ErrorComponent,
    timeout : 3000,
  })
</script>

<style>
</style>
