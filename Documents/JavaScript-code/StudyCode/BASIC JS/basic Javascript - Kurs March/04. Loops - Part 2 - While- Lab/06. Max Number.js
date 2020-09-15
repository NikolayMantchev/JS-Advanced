function maxNum(input) {
    let numberCount = Number(input.shift());
    let biggerNumber = Number.MIN_SAFE_INTEGER;
    let currentNumber = Number(input.shift());   // Value
    let numberPosition = 1;                       // position
    while (numberPosition <= numberCount) {
        if (currentNumber >= biggerNumber) {
            biggerNumber = currentNumber;
        }
        currentNumber = Number(input.shift());
        numberPosition++;
    }
    console.log(biggerNumber);
}
maxNum([3, -10, 20, -30]);