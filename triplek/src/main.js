import { createApp } from 'vue'
import { router } from './router/router.js'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import { store } from './store'

const app = createApp(App)
console.log(router,"router")
app.use(store)
app.use(router)
app.mount('#app')
