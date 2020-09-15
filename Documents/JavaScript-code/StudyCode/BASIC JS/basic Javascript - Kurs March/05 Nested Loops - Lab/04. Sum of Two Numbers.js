
function sumOfTwoNumbers(input) {

    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combinations = 0;
    let isFound = false;
    for (let i = firstNumber; i <= secondNumber; i++) {
        for (let j = firstNumber; j <= secondNumber; j++) {
            combinations++;
            
            if (i + j === magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    } if (isFound === false) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers([23,
    24,
    20])