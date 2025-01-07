

<template>
  <label>이름 : </label>
  <input v-model="result.name" type ="text" placeholder="이름을 입력하세요"><br/>
  <label>성별 : </label>
  <label>남성</label>
  <input type ="radio" name = "gender" v-model="result.gender" value ="male">
  <label>여성</label>
  <input type ="radio" name = "gender" v-model="result.gender" value ="female"><br/>
  <label>취미</label>
  <span v-for="hobby in hobby_options" :key ="hobby">
    <label>{{ hobby }}</label>
    <input type ="checkbox" v-model = "result.hobby" :value = hobby>
  </span>
  <br/>
  <label>국가</label>
  <select v-model="result.country">
    <option v-for="country in country_options" :key="country">
      {{ country }}
    </option>
  </select>
  <br/>
  <label>날짜</label>
  <input type ="date" v-model ="result.date">
  <br/>
  <label>시간</label>
  <input type ="time" v-model ="result.time">
  <br/>
  <label>색깔</label>
  <input type ="color" v-model ="result.color">
  <br/>
  <label>범위값</label>
  <input type ="range" :min ="minValue" :max ="maxValue" v-model ="result.rangeValue">
  <br/>
  <div>
    <h3>결과</h3>
    <hr/>
    {{ result }}
  </div>
</template>

<script>
import { reactive } from 'vue';

export default{
  setup(){
    const name = ""
    const gender = "male"
    const hobby = ['스포츠']
    const country = ['한국']
    const country_options =['한국','미국','중국']
    const hobby_options = ['스포츠','그림','음악','코딩']
    const date = ""
    const time = ""
    const color = ""
    const rangeValue = ""
    const minValue = 0
    const maxValue = 100
    const result = reactive({
      name,
      gender,
      hobby,
      country,
      date,
      time,
      color,
      rangeValue
    })

    return{
      result,
      country_options,
      hobby_options,
      minValue,
      maxValue
    }
  }
}
</script>

<style scoped>

</style>
