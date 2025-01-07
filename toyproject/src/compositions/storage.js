import { reactive , toRefs } from 'vue'

export const useStorage = () => {
    const KEY = 'my-guestbook'
    const storage_obj = reactive({ storage_id : 0})

    const loadGuestBooks = (initGuestbook) =>{
        let tempGuestbook = JSON.parse(localStorage.getItem(KEY)||"[]")
        tempGuestbook.forEach((item,idx) => item.id = idx)
        storage_obj.storage_id = tempGuestbook.length
        initGuestbook(tempGuestbook)
    }
    const saveGuestBooks = (data) => {
        localStorage.setItem(KEY,JSON.stringify(data))
    }

    return {
        ...toRefs(storage_obj),
        loadGuestBooks,
        saveGuestBooks,
    }
}