function solve(input) {
    let newArray = [];
    let sumOfOriginal = 0;
    let sumOfModified = 0;
    for (let i = 0; i < input.length; i++) {
sumOfOriginal += input[i];
        let curNum = input[i];
        if (curNum % 2 === 0) {
            curNum += i;
        } else {
            curNum -= i;
        }
        newArray.push(curNum);
        sumOfModified+= curNum;
    }
    console.log(newArray);
    console.log(sumOfOriginal);
    console.log(sumOfModified);
}
solve([5, 15, 23, 56, 35]);