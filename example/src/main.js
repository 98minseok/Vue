import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import NavBar from './components/NavBar.vue';
import i18n from './pulgin/i18n';


const app = createApp(App);
app.use(i18n,{
  greetings : {
    hello : "Bongjour!"
  }
})
app.use(router);
app.component('NavBar',NavBar)
app.mount("#app");

