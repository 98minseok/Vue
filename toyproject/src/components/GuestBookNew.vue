<template>
    <div id ="container">
        <div id ="user_info_section">
            <label>userId</label>
            <input type ="text" v-model="userId">
            <div class="divider"></div>
            <label>password</label>
            <input type ="password" v-model="password">
        </div>  
        <div id ="content_section">
            <label>Content</label>
            <textarea type= "text" v-model="content">
            </textarea><br>
        </div>
        
        <button id ="submit_button" @click ="onClickSubmit">등록</button>
    </div>
    
</template>
<script>
    import { inject } from 'vue';
import { ref } from 'vue';
    export default{
        setup(){
            const userId = ref("")
            const password = ref("")
            const content = ref("")
            const addGuestBook = inject('add-guestbook')
            const onClickSubmit = () => {   
                addGuestBook({userId,password,content})

            }
            return {
                userId,password,content,onClickSubmit
            }
        }
    }
</script>

<style lang="css" scoped>
    #container{
        display:flex;
        flex-direction: column;
        gap: 10px;
    }
    #container input{
        padding : 10px;
    }
    #user_info_section{
        display:flex;
        align-items: center;
        gap : 20px;
    }
    #user_info_section label{
        font-size : 16px;
    }
    #user_info_section input{
        padding : 5px;
    }
    .divider{
        padding : 20px;
    }
    #content_section{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
    }
    #content_section textarea{
        width : 100%;
        padding : 5px;
    }
</style>