<template>
  <div>마우스 위치 : {{ x }} , {{ y }}</div>
</template>

<script setup>
import { useMouse } from '@/compositions/mouse';

const {x,y} = useMouse();
</script>
