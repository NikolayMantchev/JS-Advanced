function solve(input) {
    let studentName = input.shift();
    let studentResult = 0;
    while (studentName !== "Midnight") {
        let result = 0;
        let flag = false;
        for (let i = 0; i < 6; i++) {
            let curentPoints = Number(input.shift());
            result += curentPoints;
            if (curentPoints < 0) {
                console.log(`${studentName} was cheating!`)
                flag = true
                break;
            }
        }
        let evaluation = Math.floor((result / 600) * 100);
        studentResult = evaluation * 0.06;
        if (studentResult >= 5) {
            console.log("===================");
            console.log("|   CERTIFICATE   |");
            console.log(`|    ${studentResult.toFixed(2)}/6.00    |`);
            console.log("===================");
            console.log(`Issued to ${studentName}`);
        } if (studentResult < 5 && studentResult >= 3) {
            console.log(`${studentName} - ${studentResult.toFixed(2)}`)
        } if (studentResult < 3 && flag !== true) {
            studentResult = 2;
            console.log(`${studentName} - ${studentResult.toFixed(2)}`)
        }
        studentName = input.shift();
    }
}
solve([
    'George', '100', '100',
    '94', '0', '0',
    '0', 'John', '10',
    '-1', 'Peter', '100',
    '100', '100', '100',
    '100', '70', 'Midnight'
]);


//100/100