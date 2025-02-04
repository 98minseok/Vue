<template>
<div class ="navbar-container">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/test">Test</RouterLink>
</div>
</template>
<script setup>

</script>

<style>
  .navbar-container{
    width:100%;
    position: fixed;
    top:0px;
    left:0px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding : 10px;
    gap:10px;
    border-bottom:1px solid black;
  }
</style>
