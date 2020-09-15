function solve(input) {
    let detergent = Number(input.shift());
    let totalDetergent = detergent * 750;
    let platesCounter = 0;
    let potCounter = 0;
    let loadcounter = 0;
    command = input.shift();
    while (command !== "End" && totalDetergent >= 0) {
        if (loadcounter < 2) {
            totalDetergent -= Number(command) * 5;
            platesCounter += Number(command);
            loadcounter++;
        } else {
            totalDetergent -= Number(command) * 15;
            potCounter += Number(command);
            loadcounter = 0;;
        }
        command = input.shift();
    }
    if (totalDetergent >= 0) {
        console.log("Detergent was enough!")
        console.log(`${platesCounter} dishes and ${potCounter} pots were washed.`)
        console.log(`Leftover detergent ${totalDetergent} ml.`)
    } else {

        console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`)
    }
}
solve(
    ['2', '53', '65', '55', 'End']
)
// 100/100