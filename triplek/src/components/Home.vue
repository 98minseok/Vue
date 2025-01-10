<template>
    <ul class ='nav nav-tabs justify-content-end'>
        <li class='nav-item'>
            <a class ='nav-link' :class = '{active : type == "blog"}' href='#' @click="type = 'blog'">Blog</a> 
        </li>
        <li class='nav-item'>
            <a class ='nav-link' :class = '{active : type == "clip"}' href='#' @click="type = 'clip'">Clips</a>
        </li>
    </ul>
    <div v-is="type"></div>
    <Blog></Blog>
</template>

<script>
import Blog from './Blog.vue';

export default {
    components: {
        Blog
    }
};
</script>

<style scoped>
</style>