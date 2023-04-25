function node(xCoord,yCoord,knightStat=false,travelStat=false){
    return{
        x:xCoord,
        y:yCoord,
        knight:knightStat,
        traveld:travelStat
    }
}
function createBoard(){
        let squares =[];
    for(let i=0;i<8;i++ ){
        for(let j=0; j<8; j++){
            squares.push(node(i,j))
        }
    }
    return squares;
}
function createKnight(board,x,y){
    if(x==null || y==null){
        board[0].knight = true;
        return board[0]
    }else{
        let index = ((x*8)+y);
        board[index].knight= true;
        return board[index]
    }
}
function buildTree(array){
    let start =0;
    let end = array.length -1;
    if(start>end){
        return null;
    }
    let middle = Math.ceil((start + end) / 2);
  let rootNode= array[0];
  return rootNode;
}

class knightsTravalis{
    constructor(x,y){
        this.gameBoard = createBoard();
        this.knightLoc = createKnight(this.gameBoard,x,y)
    }
    info(){
        console.log(this.gameboard);
        console.log(knightLoc);
    }
    knightMoves(current = this.knightLoc){
            let tempArray = [];
            tempArray.push(current);
            this.root = buildTree(tempArray);
    }
}
let game =new knightsTravalis();
game.knightMoves();
console.log(game.root)
