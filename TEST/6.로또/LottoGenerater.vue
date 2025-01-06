<template>
    <div>
        <div id ="computer" :style ="computedStyleObject" ></div>
        <div>
            <button @click = 'onClickButton("바위")'>바위</button>
            <button @click = 'onClickButton("가위")'>가위</button>
            <button @click = "onClickButton('보')">보</button>
        </div>
        <div>{{ result }}</div>
        <div>현재 {{ score }}점</div>
    </div>
</template>

<script>
    const rspCoords = {
        바위 : '0',
        가위 : '-142px',
        보 : '-284px',
    }
    let rspData = "바위"
    let interval = ""
    export default {
        data() {
            return {
                imgCoord :rspCoords[rspData],
                result : '',
                score : 0,
            }
        },
        computed: {
            computedStyleObject(){
                return{
                    background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0` 
                }
            }
            },
        methods :{
            changeHand(){
                interval = setInterval(() =>{
                if (rspData === "바위"){
                    rspData = "가위"
                }else if(rspData === "가위"){
                    rspData = "보"
                }else if(rspData === "보"){
                    rspData = "바위"
                }
                this.imgCoord = rspCoords[rspData]
                },100)
            },
            onClickButton(type) {
                clearInterval(interval)
                switch(type){
                    case "바위":
                        if(rspData === "바위"){
                            this.result ="무승부"
                        }
                        else if(rspData === "가위"){
                            this.result = "승리"
                            this.score ++
                        }
                        else if(rspData === "보"){
                            this.result ="패배"
                            this.score --
                        }
                        break;
                    case "가위":
                        if(rspData === "바위"){
                            this.result ="패배"
                            this.score --
                        }
                        else if(rspData === "가위"){
                            this.result = "무승부"
                        }
                        else if(rspData === "보"){
                            this.result = "승리"
                            this.score ++
                        }
                        break;
                    case "보":
                    if(rspData === "바위"){
                            this.result ="승리"
                            this.score ++
                        }
                        else if(rspData === "가위"){
                            this.result = "패배"
                            this.score --
                        }
                        else if(rspData === "보"){
                            this.result ="무승부"
                        }
                        break;
                }
                setTimeout(() =>{
                    this.changeHand();
                },1000)
            }
        },
        mounted() {
            console.log('mounted');
            this.changeHand();
        },
        beforeDestroy() {
            clearInterval(interval);
        },
    }
</script>

<style scoped>
#computer{
    width : 150px;
    height : 200px;

}
</style>
