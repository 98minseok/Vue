<template>
  <div class="df">
    <div class="df">
      <input id="CountComponent" v-model="componentType" :value="CountComponent" type="radio">
      <label for="CountComponent">A</label>
    </div>
    <div class="df">
      <input id="TextComponent" v-model="componentType" :value="TextComponent" type="radio">
      <label for="TextComponent">B</label>
    </div>
  </div>
  <component :is="componentType"></component>
  <div style ="height : 100px"></div>
  <div class="df">
    <div class="df">
      <input id="CountComponent" v-model="componentTypeAlive" :value="CountComponent" type="radio">
      <label for="CountComponent">A</label>
    </div>
    <div class="df">
      <input id="TextComponent" v-model="componentTypeAlive" :value="TextComponent" type="radio">
      <label for="TextComponent">B</label>
    </div>
  </div>
  <KeepAlive>
    <component :is="componentTypeAlive"></component>
  </KeepAlive>
</template>

<script setup>
import { ref } from 'vue';
import TextComponent from '../TextComponent.vue';
import CountComponent from '../CountComponent.vue';

const componentType = ref(CountComponent);
const componentTypeAlive = ref(CountComponent)

</script>
