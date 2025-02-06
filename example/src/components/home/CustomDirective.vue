<template>
<div class ="df aic jcc fdc">
  <input v-focus v-model ="color">
  <span v-color="color">색깔테스트</span>
  <input type="checkbox" v-model ="isActive">
  <span v-active="isActive">체크테스트</span>
  <h1>{{ $translate('greetings.hello') }}</h1>
</div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false)

const color = ref("")
  const vFocus = (el) => {
    el.focus();
  }

  const vColor = (el,binding) => {
    el.style.color = binding.value;
  }

  const vActive = (el,binding) => {
    if(binding.value === true){
      el.style.color = 'red'
      el.style.fontWeight = 'bold'
    }
    else{
      el.style.color = 'black'
      el.style.fontWeight = 'normal'
    }
  }
</script>
