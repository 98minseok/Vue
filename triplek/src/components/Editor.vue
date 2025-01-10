<template>
    <form @submit ="onSubmit" class ="m-1 row">
        <div class="text-right my-2">
            <button class ="btn btn-primary btn-sm" type="submit">저장하기</button>
        </div>
        <div>
            <input v-model = "title" placeholder="제목을 입력하세요." class="w-100 my-2" required>
        </div>
        <div class = "col-sm-6">
            <textarea
                id = "mdTextarea"
                class="w-100"
                v-model ="content"
                ref="input"
                v-on:scroll="onScroll"
                required
                ></textarea>
        </div>
        <div class = "col-sm-6 text-left" id = "preview" ref="output" >
            <markdown class="border" id="md" :source="content"/>
        </div>
    </form>
</template>
<script>
    import Markdown from 'vue3-markdown-it'
    import { ref, onMounted } from 'vue'
    import useAxios from '../modules/axios'

    export default {
        setup() {
            const { axiosPost } = useAxios()
            const title = ref("");
            const content = ref("");

            const onSubmit = (evt) => {
                if (evt) {
                    evt.preventDefault();
                }

                if (content.value.length > 0){
                    axiosPost(
                        "/db/blog",
                        {
                            title : title.value,
                            content : content.value,
                            type : "md",
                        },
                        (data) => {
                            console.log("저장하였습니다.")
                            title.value = content.value = ""
                        },
                        (data) => {
                            console.log("저장하지 못했습니다.")
                        }
                    )
                } else{
                    console.error("컨텐츠를 작성하세요.")
                }
            }

            return {
                title,
                content,
                onSubmit,
            }
        },
        components : {Markdown},
    }
</script>
<style>
    #md > table tbody tr:nth-child(odd) {
        background-color: #ccc;
    }

    #md > blockquote {
        margin-left: 32px;
        border-left: 4px solid #ccc;
        padding-left: 16px;
    }
</style>

<style scoped>
    #mdTextarea {
        height: 500px;
    }
    #md {
        height : 500px;
        overflow : scroll;
    }
</style>