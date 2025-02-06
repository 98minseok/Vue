<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = !open">모달 {{ open ? "닫기" : "열기" }}</button>

  <Teleport to="body">
    <div v-if="open" class="modal df aic jcc">
    <p>짜자잔~ 모달입니다!</p>
    <button @click="open = false">닫기</button>
    </div>
  </Teleport>

</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
