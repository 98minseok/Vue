<template>
    <div style ="height:1000px">
        <p v-notification:top="0">고정 자리에 표시하기</p>
    </div>
</template>

<script>
    export default{
        directives : {
            notification : (el,binding,vnode,prevNode) => {
                el.style.position = "fixed"
                el.style[binding.arg || 'top'] = binding.value + 'px'
            }
        }
    }
</script>