<template>
    <div>
        <p>당첨숫자</p>
        <ul id ="numberSection">
            <li v-for ="number in displayArray" :key ="number">
        <lotto-ball :key = "number" :number = "number"></lotto-ball>
            </li>
        </ul>
    </div>
    <div>
        <p>보너스</p>
        <lotto-ball v-if ="BonusNumber[0]" :number = "BonusNumber[0]"></lotto-ball>
        <button v-if = "redo" @click="onClickReset">한번 더</button>
    </div>
</template>

<script>
    import LottoBall from './LottoBall.vue';
    let interval
    let index = 0;
    const getNumbers = () => {
        const numbers = []
        for(let i = 1; i < 46; i ++){
            numbers.push(i)
        }
        const returnNumbers = []
        for(let i = 0 ; i < 7 ; i++){
            let pushNum = numbers.splice(Math.floor(Math.random() * 44-i) + 1,1)[0]
            returnNumbers.push(pushNum)
        }
        return returnNumbers;
    }
    export default{
        components : {
            'lotto-ball' : LottoBall
        },
        data () {
            return{
                BonusNumber : [],
                displayArray : [],
                redo : null
            }
        },
        methods :{
            playGame : function(){
                index = 0
                this.redo = false
                const array = getNumbers()
                const jackpotNumbers = array.slice(0,6).sort((a,b) => a-b);
                const bonusNumber = array.slice(6,7)[0]
                interval = setInterval(() =>{;
                if(index == 6){
                    this.BonusNumber.push(bonusNumber)

                }
                else{
                    this.displayArray.push(jackpotNumbers[index])
                }
                index++;
                if(index == 7){
                    clearInterval(interval)
                    this.redo = true
                }
            },100)
            },
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
            onClickReset : function(){
                this.BonusNumber = []
                this.displayArray = []
            }
        },
        mounted (){
            this.playGame()
        },
        watch : {
            displayArray(val,oldVal){
                if(val.length === 0 ){
                    this.playGame()
                }
            }
        }

    }
</script>

<style scoped>
    #numberSection{
        display:flex;
        list-style-type: none;
    }
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
