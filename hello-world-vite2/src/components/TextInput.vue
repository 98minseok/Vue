<template>
    <input id="name" v-bind:value="name" />
    <input id="age" v-bind:value="age" />
    <button @click="onClick">변경하기</button>
    <hr />
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const name = ref("TEST");
      const age = ref(0);
  
      const onClick = () => {
        // 반응형 값 수정 시 .value를 사용해야 함
        name.value = document.getElementById("name").value;
        age.value = document.getElementById("age").value;
      };
  
      return { name, age, onClick };
    },
  };
  </script>
  