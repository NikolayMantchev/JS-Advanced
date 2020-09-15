function minNum(input) {
    let numberCount = Number(input.shift());
    let smallerNumber = Number.MAX_SAFE_INTEGER;
    let currentNumber = Number(input.shift());   // Value
    let numberPosition = 1;                       // position
    while (numberPosition <= numberCount) {
        if (currentNumber <= smallerNumber) {
            smallerNumber = currentNumber;
        }
        currentNumber = Number(input.shift());
        numberPosition++;
    }
    console.log(smallerNumber);
}
minNum([2, 99, 100]);