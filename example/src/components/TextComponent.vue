<template>
    Current Component : B
  <div>
    Message is : {{ value }} <input v-model="value">
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const value = ref("");
</script>
