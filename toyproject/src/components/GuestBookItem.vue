<template>
    <div id ="container">
        <div id ="user_info_section">
            <span>{{ data.userId }}</span>
        </div>
        <div id ="content_section">
            {{ data.content }}
        </div>
        <div>
            {{ data.likes }}
        </div>
    </div>
    
</template>

<script>
    export default{
        setup() {
            
        },
        props : {
            data : Object
        }
    }
</script>

<style lang="css" scoped>
    #container{
        border : 1px solid black;
        padding : 20px;
    }
    #user_info_section{
        display:flex;
        justify-content: flex-start;
        font-size : 16px;
        font-weight: bold;
    }
    #content_section{
        display:flex;
        justify-content : flex-start;
        font-size : 24px;
    }
</style>