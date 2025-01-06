<template>
    <div class ="numberDiv" :style="{ backgroundColor : colorOfNumber(number) }">
         {{ number }}
    </div>
</template>

<script>
    export default{
        props : ['number'],
        methods : {
            colorOfNumber : function(number){
                console.log(number, number/10)
                let result = Math.floor(number/10);
                if(result == 0){
                    return "red"
                }
                else if(result== 1){
                    return "orange"
                }
                else if(result == 2){
                    return "yellow"
                }
                else if(result == 3){
                    return "blue"
                }
                else{
                    return "green"
                }
            },
        }
    }
</script>

<style scoped>
    .numberDiv{
        display:flex;
        justify-content: center;
        align-items: center;
       padding :30px;
       width : 50px;
       height : 50px;
       margin : 10px;
       box-sizing:border-box;
       text-align:center;
       border-radius : 100px;
       border:1px solid black;
    }
</style>