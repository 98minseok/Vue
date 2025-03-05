<template>
    <td :class ="isPaidValue ? 'isPaid' : ''" @click = "onClickFeeCell">     
    </td>
</template>
<script setup>
import { useFeeStore } from '@/store/fee';
import { ref } from 'vue';

const props = defineProps({
    isPaid : Boolean,
    month : Number,
    userId : Number,
})

const {addFeeData,deleteFeeData} = useFeeStore();
const isPaidValue = ref(props.isPaid)

const onClickFeeCell = () => {
    console.log(props , isPaidValue);
    if(isPaidValue.value){
        deleteFeeData(props.userId,props.month)
        isPaidValue.value = false
    }
    else{
        addFeeData(props.userId,props.month);
        isPaidValue.value = true
    }
}
</script>
<style lang="css" scoped>
    .isPaid{
        background-color: red;
    }
    td{
        cursor: pointer;
    }
</style>