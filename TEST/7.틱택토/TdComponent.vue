<template>
    <td @click ="onClickTd">{{ cellData }}</td>
</template>

<script>
    export default{
        props : {
            rowData : Array,
            cellData : String,
            cellIndex : Number,
            rowIndex : Number,
        },
        methods : {
            onClickTd() {
                const rootData = this.$root.$data;
                let turn = rootData.turn
                console.log(rootData.tableData[this.rowIndex][this.cellIndex])
                if(rootData.tableData[this.rowIndex][this.cellIndex] == ''){
                    rootData.tableData[this.rowIndex][this.cellIndex] = turn
                    let win
                    rootData.winner = ''
                    if(rootData.tableData[this.rowIndex][0] === turn && rootData.tableData[this.rowIndex][1] === turn && rootData.tableData[this.rowIndex][2])
                        win = true

                    if(rootData.tableData[0][this.cellIndex] === turn && rootData.tableData[1][this.cellIndex] === turn && rootData.tableData[2][this.cellIndex])
                        win = true

                    if(rootData.tableData[0][0] === turn && rootData.tableData[1][1] == turn && rootData.tableData[2][2] == turn){
                        win = true
                    }

                    if(rootData.tableData[0][2] === turn && rootData.tableData[1][1] == turn && rootData.tableData[2][0] == turn){
                        win = true
                    }

                    if(win){
                        rootData.winner = rootData.turn;
                        setTimeout(() => {
                            rootData.turn = 'O';
                            rootData.tableData = [
                                ['','',''],
                                ['','',''],
                                ['','','']
                            ]
                        },1000)
                    }
                    if(rootData.tableData.includes("")){
                        rootData.winner = "무승부";
                        setTimeout(() => {
                            rootData.turn = 'O';
                            rootData.tableData = [
                                ['','',''],
                                ['','',''],
                                ['','','']
                            ]
                        },1000)
                        
                    }
                    rootData.turn = rootData.turn === 'O' ? 'X':'O'
                }
            }
        }
    }
</script>