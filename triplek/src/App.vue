<template>
  <toast />
  <nav-bar></nav-bar>
  <div id="notification"/>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Profile from './components/Profile.vue';
import Application from './components/Application.vue';
import Toast from './components/Toast.vue';
import { provide, ref } from 'vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Profile,  // Profile 컴포넌트 추가
    Application,  // Application 컴포넌트 추가
    Toast,
  },
  setup() {
    const toast = ref('')
    provide('toast',toast)
  }
}
</script>

<style>
  #notification{
    text-shadow: 2px 2px 2px gray;
  }
</style>