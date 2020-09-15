function solve(input) {
    let points = Number(input.shift());
    let moves = 0;
    let totalPoints = points;
    for (let i = points; i >= 0; i--) {
        let curentMarker = input.shift();
        let curentPoints = Number(input.shift());
        moves++;
        if (curentMarker == "number section") {
            totalPoints -= curentPoints;
        }
        if (curentMarker == "double ring") {
            totalPoints -= curentPoints * 2;
        }
        if (curentMarker == "triple ring") {
            totalPoints -= curentPoints * 3;
        }
        if (curentMarker == "bullseye") {
            console.log(`Congratulations! You won the game with a bullseye in ${moves} moves!`)
            break;
        }
        if (totalPoints === 0) {
            console.log(`Congratulations! You won the game in ${moves} moves!`);
            break;
        }
        if (totalPoints < 0) {
            console.log(`Sorry, you lost. Score difference: ${Math.abs(totalPoints)}.`)
            break;
        }
    }


}
solve([
    '150',
    'double ring',
    '20',
    'triple ring',
    '10',
    'number section',
    '20',
    'triple ring',
    '20'
]);