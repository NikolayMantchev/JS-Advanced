function calculate(input) {
    let count = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;

    let oddMin = Number.MAX_SAFE_INTEGER;
    let evenMin = Number.MAX_SAFE_INTEGER;

    let oddMax = 0;
    let evenMax = 0;

    for (let i = 1; i <= count; i++) {
        evenSum += Number(input[i]);        //NaN ???!!!
        oddSum += Number(input[i]);
    } 
    console.log(oddSum);
    console.log(evenSum);

}
calculate ([6, 2, 3, 5, 4, 2, 1])
