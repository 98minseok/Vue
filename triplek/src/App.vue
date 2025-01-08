<template>
  <nav-bar></nav-bar>
  <Profile></Profile>
  <Application></Application>
</template>

<script>
  import Application from './components/Application.vue';
import NavBar from './components/NavBar.vue';
  import Profile from './components/Profile.vue';
  export default{
    name : 'App',
    components : {
      NavBar,
      Profile,
      Application,
    }
  }
</script>
<style scoped>

</style>
