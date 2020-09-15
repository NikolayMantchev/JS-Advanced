function solve(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;                           // Булев Флаг
    let printCurrentLine = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true                     // Прекъсваме с Булев Флаг
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {                                 // Булевия флаг се прекъсва и във Форцикъла
            break;
        }
    }
}
solve('7');