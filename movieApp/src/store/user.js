import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user',() => {

    const userData = ref([])
    const getUserData = () => {
        userData.value = [
            { id: 0, name: "이유리" },
            { id: 1, name: "김유미" },
            { id: 2, name: "박지연" },
            { id: 3, name: "이정은" },
            { id: 4, name: "이상엽" },
            { id: 5, name: "박지연" },
            { id: 6, name: "이상엽" },
            { id: 7, name: "이유리" },
            { id: 8, name: "홍길동" },
            { id: 9, name: "홍길동" },
            { id: 10, name: "김민석" },
            { id: 11, name: "신동엽" },
            { id: 12, name: "김민석" },
            { id: 13, name: "전지현" },
            { id: 14, name: "하정우" },
            { id: 15, name: "전지현" },
            { id: 16, name: "유재석" },
            { id: 17, name: "김민석" },
            { id: 18, name: "전지현" },
            { id: 19, name: "강호동" }
        ]
        return userData.value;
    }
    return { getUserData }
})