function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let output = "";
    for (let i = start; i <= end; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let currentNum = i.toString();
        for (let j = 0; j < currentNum.length; j++) {
            let digit = Number(currentNum[j]);
            if (j % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        if (evenSum === oddSum) {
            output += currentNum + " ";
        }
    }
    console.log(output);
}
solve(['123456', '124000']);


// Result 100/100 djudge