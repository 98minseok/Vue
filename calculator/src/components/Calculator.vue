<script setup>
import { ref } from 'vue';

// 계산기의 화면을 위한 상태
const display = ref(''); // 계산기의 입력/결과를 표시
const currentValue = ref(''); // 현재 입력값 저장
const operator = ref(''); // 연산자
const prevValue = ref(''); // 이전 값

// 숫자 버튼 클릭
const handleNumberClick = (number) => {
  currentValue.value += number; // 숫자 이어붙이기
  display.value = currentValue.value; // 화면에 현재 입력값 표시
};

// 연산자 버튼 클릭
const handleOperatorClick = (op) => {
  if (currentValue.value) {
    prevValue.value = currentValue.value; // 이전 값에 현재 입력값 저장
    currentValue.value = ''; // 현재 입력값 초기화
    operator.value = op; // 연산자 저장
  }
};

// 계산 버튼 클릭
const handleEqualsClick = () => {
  if (currentValue.value && prevValue.value && operator.value) {
    let result;
    const num1 = parseFloat(prevValue.value);
    const num2 = parseFloat(currentValue.value);

    // 연산자에 따라 계산
    switch (operator.value) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    display.value = result; 
    currentValue.value = result; 
    prevValue.value = ''; 
    operator.value = ''; 
  }
};

// 초기화 버튼 클릭
const handleClear = () => {
  currentValue.value = ''; 
  prevValue.value = ''; 
  operator.value = ''; 
  display.value = ''; 
};
</script>

<template>
  <div class="calculator">
    <div class="display">
      <input type="text" :value="display" readonly />
    </div>
    <div class="buttons">
      <button @click="handleNumberClick(1)">1</button>
      <button @click="handleNumberClick(2)">2</button>
      <button @click="handleNumberClick(3)">3</button>
      <button @click="handleOperatorClick('+')">+</button>

      <button @click="handleNumberClick(4)">4</button>
      <button @click="handleNumberClick(5)">5</button>
      <button @click="handleNumberClick(6)">6</button>
      <button @click="handleOperatorClick('-')">-</button>

      <button @click="handleNumberClick(7)">7</button>
      <button @click="handleNumberClick(8)">8</button>
      <button @click="handleNumberClick(9)">9</button>
      <button @click="handleOperatorClick('*')">*</button>

      <button @click="handleClear">C</button>
      <button @click="handleNumberClick(0)">0</button>
      <button @click="handleEqualsClick">=</button>
      <button @click="handleOperatorClick('/')">/</button>
    </div>
  </div>
</template>

<style scoped>
.calculator {
  width: 200px;
  margin: 0 auto;
  text-align: center;
}

.display input {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  text-align: right;
  margin-bottom: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
}

button:active {
  background-color: #ddd;
}
</style>
