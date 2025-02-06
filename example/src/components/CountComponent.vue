<template>
  Current Component : A
  <div>
    Count is : {{ value }} <button @click ="value++">+</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

  const value = ref(0);
</script>
