<script setup>
import BindModel from './components/bindModel.vue';
import ClickButton from './components/ClickButton.vue';
import HelloWorld from './components/HelloWorld.vue'
import Date from '@components/Date.vue'
import Vif from './components/Vif.vue';
import Vfor from './components/Vfor.vue';
import VComputed from './components/VComputed.vue';
import Watch from './components/Watch.vue';
import MyComponent from './components/MyComponent.vue';
import TextInput from './components/TextInput.vue';
</script>

<template>
  <TextInput/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
