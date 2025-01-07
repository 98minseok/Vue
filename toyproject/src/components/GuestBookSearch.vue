<template>
    <div id ="container">
    <select v-model="type" :default ="type">
        <option v-for="option in type_options" :key="option" :value="option">{{ option }}</option>
    </select>
    <input type="text" v-model="value" placeholder="입력하세요">
    <button @click="onClickSearch">검색</button>
    </div>
</template>

<script>
import { ref, inject } from 'vue';

export default {
    emits: ['update-data'],
    setup(props, context) {
        const type = ref('userId'); // 기본값을 'userId'로 설정
        const value = ref('');
        const type_options = ['userId', 'content'];
        const searchedData = inject('searched-data');
        const guestbooks = inject('guestbooks').value.slice(); // guestbooks 복사본 생성

        // 필터링 함수
        const filterGuestbooks = () => {
            const query = value.value.trim().toLowerCase();
            if (!query) {
                return guestbooks; // 검색어가 없으면 전체 데이터를 반환
            }
            return guestbooks.filter(item => {
                const field = item[type.value]?.toString().toLowerCase(); // 값이 문자열이면 처리
                return field && field.includes(query); // 대소문자 구분 없이 필터링
            });
        };

        // 검색 버튼 클릭 시 호출되는 함수
        const onClickSearch = () => {
            console.log('검색어:', value.value.trim());
            searchedData.value = filterGuestbooks(); // 필터링된 데이터 설정
            context.emit('update-data', searchedData.value); // 부모 컴포넌트에 업데이트
        };

        return {
            type,
            value,
            type_options,
            onClickSearch
        };
    }
};
</script>

<style lang="css" scoped>
    #container{
        display:flex;
        justify-content: center;
        align-items: center;
        gap:5px;
    }
    #container select,input{
        padding : 10px;
        font-size : 18px;
    }
</style>