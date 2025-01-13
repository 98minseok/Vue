<template>
    <ul class ='nav nav-tabs justify-content-end'>
        <li class='nav-item'>
            <a class ='nav-link' :class = '{active : type == "Blog"}' href='#' @click="type = 'Blog'">Blog</a> 
        </li>
        <li class='nav-item'>
            <a class ='nav-link' :class = '{active : type == "Clip"}' href='#' @click="type = 'Clip'">Clips</a>
        </li>
    </ul>
    <component :is="type"></component>
</template>

<script>
import { ref } from 'vue';
import Blog from './Blog.vue';
import Clip from './Clip.vue';

export default {
    setup() {
        const type = ref('Blog');
        return { type };
    },
    components: {
        Blog,
        Clip
    }
};
</script>

<style scoped>
</style>