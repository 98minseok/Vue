<template>
    <button v-on= "type == 'switch' ? {click:onClick} : {}" v-bind="$attrs" :type="type" :class="classes" :active="active" ref="button">
        <slot></slot>
    </button>
</template>

<script>
    import { onUpdated } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
    export default{
        props:{
            type:{
                default: 'button',
                validator:(value) =>{
                    const allowed =['button','submit','reset','switch']
                    return allowed.includes(value)
                }
            },
            sm : Boolean,
            md: {
                type : Boolean,
                default : true,
            },
            lg : Boolean,
            pill: Boolean,
            deactive : Boolean,
            active : Boolean,
        },
        emits : ['update:active']
        ,
        setup(props,context){
            const classes = []
            const button = ref(null)
            const active = ref(props.active)

            if (props.sm) classes.push('sm')
            else if (props.lg) classes.push('lg')
            else classes.push('md')

            if (props.pill) classes.push('pill')

            
            const changeBrightness = () => {
                if (props.type == 'switch'){
                if(!active.value){
                    classes.push('deactive')
                }
                else{
                    classes.splice(classes.findIndex((e) => e == "deactive"),1)
                }
                }
            }
            changeBrightness();


            const onClick = () => {
                active.value = !active.value
                changeBrightness()
                context.emit('update:active',active.value)
            }
            onMounted(() => {
                Object.keys(context.attrs).forEach((attr) => {
                    if (attr.startsWith('text-')){
                        button.value.style.color = attr.substring(5) // ref 변수이기때문에 button 자체가아닌 button.value 가 엘리먼트에 접근함함
                    }
                    if(attr.startsWith('background-')){
                    button.value.style.backgroundColor = attr.substring(11)
                    }
                })
                
            })
            return {
                classes,
                button,
                onClick
            }
        }

    }
</script>

<style scoped>
button{
    outline : none;
    display:flex;
    justify-content: center;
    align-items: center;
}

.sm{
    height:20px;
    font-size:22px;
}

.md{
    height:40px;
    font-size:22px;
}

.lg{
    height:50px;
    font-size:31px;
}

.pill{
    border-radius:16px;
}
.deactive{
    filter : brightness(50%);
}
</style>