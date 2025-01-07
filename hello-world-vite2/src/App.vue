<script setup>
import ListComponent from './components/ListComponent.vue';
</script>

<template>
  <ListComponent>
    <template v-slot ="slotProps">V {{ slotProps.item }} </template>
  </ListComponent>
</template>

