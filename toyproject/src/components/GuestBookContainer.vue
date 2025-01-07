<template>
    <div id ="container">
    <GuestBookNew />
    <GuestBookList />
    </div>
</template>

<script>
import { provide, ref } from 'vue';
import { useStorage } from '../compositions/storage';
import GuestBookList from './GuestBookList.vue';
import GuestBookNew from './GuestBookNew.vue';

export default {
    setup() {
        const guestBooks = ref([]);
        const { storage_id, loadGuestBooks, saveGuestBooks } = useStorage();

        const initGuestBooks = (data) => {
            guestBooks.value = data;
        }

        loadGuestBooks(initGuestBooks);

        const addGuestBook = ({ userId, password, content }) => {
            guestBooks.value.push({
                id: storage_id.value++, // storage_id는 reactive 객체의 속성
                userId,
                password,
                content,
                liked: 0,
            });
            saveGuestBooks(guestBooks.value); // .value 사용
        }

        const editGuestBook = ({ id, newContent }) => {
            guestBooks.value[id].content = newContent; // content로 수정
            saveGuestBooks(guestBooks.value); // .value 사용
        }

        const deleteGuestBook = ({ id }) => {
            guestBooks.value.splice(id, 1);
            guestBooks.value.forEach((e, index) => e.id = index);
            saveGuestBooks(guestBooks.value); // .value 사용
        }

        // provide로 데이터와 함수 전달
        provide('guestbooks', guestBooks);
        provide('add-guestbook', addGuestBook);
        provide('edit-guestbook', editGuestBook);
        provide('delete-guestbook', deleteGuestBook);
    },
    components: {
        GuestBookList,
        GuestBookNew
    }
}
</script>

<style lang="css" scoped>
    #container{
        display:flex;
        flex-direction: column;
        gap : 10px;
    }
</style>
