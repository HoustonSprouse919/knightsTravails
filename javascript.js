function square(xCoord,yCoord,knightStat=false,travelStat=false){
    return{
        x:xCoord,
        y:yCoord,
        knight:knightStat,
        traveld:travelStat
    }
}
function node(storedData,possibleNext = null){
    return{
        square:storedData,
        next:possibleNext
    }
}
function createBoard(){
        let squares =[];
    for(let i=0;i<8;i++ ){
        for(let j=0; j<8; j++){
            squares.push(square(i,j))
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
  let rootNode= node(array[0]);
  return rootNode;
}

class knightsTravalis{
    constructor(x,y){
        this.gameBoard = createBoard();
        this.knightLoc = createKnight(this.gameBoard,x,y)
        let tempArray = [];
        tempArray.push(this.knightLoc);
        this.knightRoot = buildTree(tempArray);
    }
    info(){
        console.log(this.gameboard);
        console.log(knightLoc);
    }
    knightMoves(current = this.knightLoc){
        function possibleMoves(){
            let currentX = current.x;
            let currentY = current.y;
            switch(true){
                    case currentX <=5:
                        console.log("hiiii")
                        /* we can now move up on the x axis by two and then check if we can move up 1 or down one on y*/
                        case currentX >5:
                            /*we cannot go up*/
                            case currentX >=2:
                            /*we can go down on the x axis by 2*/
                             case currentX <2:
                             /*we cannot go down x axis*/
                            
                        case currentY <=5:
                        /* we can now move up on the y axis by two and then check if we can move up 1 or down one on y*/
                        case currentY >5:
                            /*we cannot go up y*/
                            case currentY >=2:
                            /*we can go down on the y axis by 2*/
                             case currentY <2:
                              /*we can not go down on the y axis by 2*/
                default:
                console.log("we made it to the deafult case")
            }
        }
        possibleMoves();
    }
}
let game =new knightsTravalis();
game.knightMoves();
console.log(game.knightRoot)
