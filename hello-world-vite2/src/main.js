import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.title = "Vue 3 Demo"
app.provide('counter_header', 'Counter ')
app.mount('#app')
