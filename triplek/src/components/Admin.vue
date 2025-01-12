<template>
    <div v-if="state == 'ok'">
        <div class="row text-right pr-sm-2">
            <small><a href="#" @click="onLogout">Logout</a></small>
        </div>
        <editor></editor>
    </div>
    <div v-else-if="state == 'loading'"> Loading ... </div>
    <login v-else :email ="email" :type ="state" @state = "state = 'ok'"/>

</template>

<script>
import { inject, onBeforeMount, ref } from 'vue';
import Login from './Login.vue';
import Editor from './Editor.vue';
import { getCookie, setCookie } from '../modules/cookie';
import useLogin from '../modules/login';
export default {
    name: 'Admin',
    setup() {
        const state = ref('loading');
        const email = ref(getCookie('email'));
        const token = ref(getCookie('token'));
        const toast = inject('toast', '');

        onBeforeMount(() => {
            const { checkToken } = useLogin();
            const auto_login = getCookie('stay') == 'true';

            email.value = email.value == ('' || null) ? 'test-email' : email.value;
            token.value = token.value == ('' || null) ? 'test-token' : token.value;
            console.log(email.value, token.value);
            checkToken(email.value,token.value)
            .then((data) => {
                console.log("data : " , data.data)
                if(data.data == 'vue'){
                    state.value = 'update';
                    email.value = '';
                } else if(auto_login){
                    state.value = 'ok';
                } else {
                    state.value = 'login';
                }
            }).catch((e) =>{
                state.value = 'login';
            })
        });

        const onLogout = (e) => {
            if(e) e.preventDefault();
            toast.value = '로그아웃 되었습니다.';
            setCookie('token','')
            state.value = 'login';
        }

        return { state, email, onLogout };
    },
    components: {
        Login,
        Editor
    }
};
</script>
<style scoped>
.admin {
    /* Add your component styles here */
}
</style>