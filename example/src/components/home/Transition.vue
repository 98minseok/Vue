<template>
  <div>
    <button @click ="show = !show">토글</button>
    <Transition name = "fade">
      <p v-if ="show">안녕</p>
    </Transition>
    <Transition name ="slide-fade">
      <p v-if ="show">안녕</p>
    </Transition>

    <Transition name="bounce">
    <p v-if="show" style="text-align: center;">
      안녕! 여기에 탄력적인 텍스트가 있어요!
    </p>
  </Transition>
  </div>
  <div>
    <span style="margin-right: 20px">클릭 시 상태 변경:</span>
  <div class="btn-container">
		<Transition name="slide-up" mode="out-in">
      <button v-if="docState === 'saved'"
              @click="docState = 'edited'">수정</button>
      <button v-else-if="docState === 'edited'"
              @click="docState = 'editing'">저장</button>
      <button v-else-if="docState === 'editing'"
              @click="docState = 'saved'">취소</button>
    </Transition>
  </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
  const show = ref(false)
  const docState = ref("saved")
</script>

<style>
  .fade-enter-active,
  .fade-leave-active{
    transition : opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }

  .slide-fade-enter-active{
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active{
    transition: all 0.5s ease
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to{
    transform: translateX(30px);
    opacity: 0;
  }

  .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
