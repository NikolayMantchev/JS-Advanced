function sumNumbers(args) {
    let n = Number (args[0]);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let curentNumber = Number(args[i]);
        sum += curentNumber;
    }
    console.log(sum);
}
sumNumbers([3, -10, -20, -30]);
// Result 100/100