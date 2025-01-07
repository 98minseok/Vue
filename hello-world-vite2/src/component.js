import { createApp, ref } from 'vue'
import './style.css'

const app = createApp({})

app.component('counter',{
    inject : ['counter_header'],
    setup(){
        const count = ref(0)
        return {count}
    },
    template : `
        <span>{{ counter_header }}</span>
        <button @click="count++" v-text="count" />
        <hr/>
    `
})
app.config.globalProperties.title = "Vue 3 Demo"
app.provide('counter_header', 'Counter ')
app.mount('#app')
