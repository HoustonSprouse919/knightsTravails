function node(xCoord,yCoord,knightStat=false,travelStat=false){
    return{
        x:xCoord,
        y:yCoord,
        knight:knightStat,
        traveld:travelStat
    }
}
let squares =[];
function createBoard(){
    for(let i=0;i<8;i++ ){
        for(let j=0; j<8; j++){
            squares.push(node(i,j))
        }
    }
}
function createKnight(x,y){
    if(x==null || y==null){
        squares[0].knight = true;
    }else{
        let index = ((x*8)+y);
        squares[10].knight= true;
    }
}
createBoard();
createKnight(1,2);
console.log(squares)
