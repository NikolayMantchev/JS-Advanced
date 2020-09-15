function solve(input, controlNum, budget) {
    controlNum = Number(controlNum);
    budget = Number(budget);
    let producktValue = 0;
    let moneyLeft = 0;
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                producktValue += 3;
                break;
            default:
                producktValue++;
                break;
        }
    }
    let result = producktValue * controlNum;
    if (budget < result) {
        console.log(`Cannot buy ${input}. Product value: ${result.toFixed(2)}`);
    } else {
        moneyLeft = budget - result;
        console.log(`${input} bought. Money left: ${moneyLeft.toFixed(2)}`);
    }
}
solve('milk', 1.4, 8);