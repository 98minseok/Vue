<template>
    <div>
        <div id ="screen" v-bind:class ="state" @click ="onClickScreen">{{message}}</div>
        <template v-if="result.length">
            <div>평균 시간 : {{average}}ms</div>
            <button @click ="onReset">리셋</button>
        </template>
    </div>
</template>

<script>
    let start_time = ""
    let end_time = ""
    let timeout =""
    export default {
        data() {
            return {
                result : [],
                state : 'waiting',
                message : '클릭해서 시작하세요.',
            }
        },
        computed: {
            average() {
                return this.result.length > 0
                ? this.result.reduce((a, c) => a + c, 0) / this.result.length
                : 0;
            },
            },
        methods :{
            onReset() {
                this.result = []
            },
            onClickScreen(){
                if(this.state === 'waiting'){
                    this.state = 'ready'
                    this.message = '잠시만 기다리세요'
                    timeout = setTimeout(() => {
                        this.state = 'now'
                        this.message = "지금!"
                        start_time = new Date().getTime()
                    }, Math.random() * 1000 + 2000);
                } else if (this.state === 'ready'){
                    clearTimeout(timeout)
                    this.state = 'waiting'
                    this.message ='너무 일찍 눌렀어요 ㅜㅜ'
                } else if (this.state === 'now'){
                    this.state = 'waiting'
                    this.message = "클릭해서 시작하세요"
                    end_time = new Date().getTime();
                    this.result.push(end_time - start_time)
                }
                console.log(this.result)
            }
            
        },
    }
</script>

<style scoped>
    #screen{
        width : 300px;
        height : 200px;
        text-align :center;
        user-select : none;
    }
    #screen.waiting{
        background-color: aqua;
    }
    #screen.ready{
        background-color: red;
        color : white;
    }
    #screen.now{
        background-color: greenyellow;
    }
</style>