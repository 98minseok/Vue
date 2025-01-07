import { createApp, ref } from 'vue'
import './style.css'
import MyComponent from './components/MyComponent.vue'
import Emits from './components/Emits.vue'

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

app.component('MyComponent',MyComponent)
app.component('Emit',Emits)
app.component('Component',{
    setup(props,context){
        const msg = context.attrs.msg
        return {
            msg,
        }
    },
    template:
    `
        <Component3></Component3>
    `
})

app.component('Component2',{
    inheritAttrs : false,
    setup(props,context){
        const msg = context.attrs.msg
        return {
            msg,
        }
    },
    template:
    `
        <Component3></Component3>
    `
})


app.component('Component3',{
    setup(props,context){
        const msg = context.attrs.msg
        return {
            msg,
        }
    },
    template:
    `
        <div>
            <p>@Component : {{ $attrs.msg }}</p>
        </div>
    `
})


app.config.globalProperties.title = "Vue 3 Demo"
app.provide('counter_header', 'Counter ')
app.mount('#app')
