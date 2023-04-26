function moveNode(position,path,traveld){
    if(position[0]<0 || position[0]>7||position[1]<0||position[1]>7){
        return null;
    }
    return{
        pos:position,
        dest:path
    }
}


function knightsTravalis([x,y],[a,b]){
    let nodeQ = [moveNode([x, y], [[x,y]])];
    let currentNode = nodeQ.shift();
     while (currentNode.pos[0] !== a || currentNode.pos[1] !== b) {
    let moves = [
      [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
    ];
           moves.forEach(move => {
           let node = moveNode(move,currentNode.dest.concat([move]));
           if(node !=null){
               nodeQ.push(node)
           }
           });
           currentNode = nodeQ.shift();
     }
     console.log(`it took the knight ${currentNode.dest.length -1} moves to make it to its destination`)
     
}
knightsTravalis([0,0],[5,5]);
