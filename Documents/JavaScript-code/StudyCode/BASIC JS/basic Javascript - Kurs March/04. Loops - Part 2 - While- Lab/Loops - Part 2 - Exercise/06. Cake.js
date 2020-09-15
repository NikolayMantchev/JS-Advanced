function solve(input) {
    let width = Number(input.shift());
    let hight = Number(input.shift());

    let cakeCapacity = width * hight;
    let piecesTaken = 0;
    let command = Number(input.shift());
    while (command !== "STOP") {
        piecesTaken += Number(command);
        if (piecesTaken > cakeCapacity) {
            break;
        }
        command = input.shift();
    }
    if (command === "STOP") {
        let piecesLeft = cakeCapacity - piecesTaken
        console.log(`${piecesLeft} pieces are left.`)
    } else {
        let piecesNeeded = piecesTaken - cakeCapacity
        console.log(`No more cake left! You need ${piecesNeeded} pieces more.`)
    }
}
solve(
    [ '10', '2', '2', '4', '6', 'STOP' ]
)
//   100/100