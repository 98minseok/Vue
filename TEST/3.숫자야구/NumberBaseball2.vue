<template>
    <form action ="#" v-on:submit="onClickSubmit">
        <input ref="answer" maxlength =4 v-model = "value"/>
        <button type ="submit">입력</button>
    </form>
    <div>시도 : {{ tries }}</div>
    <ul>
        <li v-for="item in resultArr">
            <p>{{ item.value}} </p>
            <p>{{ item.result }} </p>
        </li>
    </ul>
</template>

<script>

    export default {
        data (){
            return {
                value : "",
                resultArr : [],
                answer : "2385",
                tries : 0,
            }
        },
        methods : {
            onClickSubmit : function(event){
                event.preventDefault()
                console.log(this.answer);

                this.tries++
                let newValue = ""
                let newResult = ""
                let strike = 0
                let ball = 0

                this.answer.split("").forEach((spell,index)=>{
                    const resultIndex = this.value.split("").findIndex((e) => e == spell) 
                    if(resultIndex != -1){
                        if(index === resultIndex)
                            strike++
                        else
                            ball++
                    }
                })

                newValue = this.value;
                if(strike == 4){
                    newResult = "홈런~"
                }
                else
                    newResult = strike + "스트라이크 , " + ball + "볼"
                this.resultArr.push({value : newValue , result : newResult})
                this.value = ""
                this.$refs.answer.focus()
            }
        }
    };
</script>

<style>
</style>