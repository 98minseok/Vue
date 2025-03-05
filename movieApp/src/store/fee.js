import { defineStore } from "pinia";
import { ref } from "vue";

export const useFeeStore = defineStore('fee',() => {
    const feeData = ref([
        { id: 0, month: 12, userId: 20 },
        { id: 1, month: 7, userId: 5 },
        { id: 2, month: 6, userId: 3 },
        { id: 3, month: 1, userId: 20 },
        { id: 4, month: 9, userId: 14 },
        { id: 5, month: 7, userId: 12 },
        { id: 6, month: 3, userId: 18 },
        { id: 7, month: 12, userId: 20 },
        { id: 8, month: 4, userId: 3 },
        { id: 9, month: 8, userId: 15 },
        { id: 10, month: 12, userId: 10 },
        { id: 11, month: 7, userId: 20 },
        { id: 12, month: 4, userId: 9 },
        { id: 13, month: 11, userId: 18 },
        { id: 14, month: 7, userId: 12 },
        { id: 15, month: 5, userId: 10 },
        { id: 16, month: 11, userId: 2 },
        { id: 17, month: 5, userId: 14 },
        { id: 18, month: 9, userId: 15 },
        { id: 19, month: 9, userId: 10 },
        { id: 20, month: 7, userId: 15 },
        { id: 21, month: 6, userId: 8 },
        { id: 22, month: 1, userId: 2 },
        { id: 23, month: 3, userId: 14 },
        { id: 24, month: 2, userId: 12 },
        { id: 25, month: 12, userId: 12 },
        { id: 26, month: 9, userId: 9 },
        { id: 27, month: 4, userId: 18 },
        { id: 28, month: 11, userId: 4 },
        { id: 29, month: 11, userId: 18 },
        { id: 30, month: 11, userId: 12 },
        { id: 31, month: 11, userId: 13 },
        { id: 32, month: 11, userId: 17 },
        { id: 33, month: 9, userId: 1 },
        { id: 34, month: 5, userId: 1 },
        { id: 35, month: 6, userId: 6 },
        { id: 36, month: 5, userId: 17 },
        { id: 37, month: 1, userId: 2 },
        { id: 38, month: 4, userId: 15 },
        { id: 39, month: 11, userId: 18 },
        { id: 40, month: 2, userId: 17 },
        { id: 41, month: 4, userId: 8 },
        { id: 42, month: 7, userId: 6 },
        { id: 43, month: 4, userId: 18 },
        { id: 44, month: 12, userId: 1 },
        { id: 45, month: 12, userId: 15 },
        { id: 46, month: 10, userId: 1 },
        { id: 47, month: 11, userId: 6 },
        { id: 48, month: 8, userId: 9 },
        { id: 49, month: 4, userId: 19 }
    ]);
    const getFeeData = (user) => {
        return feeData.value.filter((e) => e.userId == user)
    }
    
    const addFeeData = (user,month) => {
        feeData.value.push({
            id : feeData.value.length + 1,
            userId : user,
            month : month
        })

        console.log(feeData.value);
    }

    const deleteFeeData = (user,month) => {
        feeData.value = feeData.value.filter((e) => !(e.userId == user && e.month == month))

        console.log(feeData.value);
    }
    return { getFeeData , addFeeData , deleteFeeData }
})