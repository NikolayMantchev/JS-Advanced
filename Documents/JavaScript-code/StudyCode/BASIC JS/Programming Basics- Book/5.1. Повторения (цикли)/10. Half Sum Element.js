function halfSum(args) {
    let input = Number(args[0]);
    let maxNum = 0;
    let curentNum = 0;
    for (let i = 1; i <= input; i++) {
        curentNum += Number(args[i]);
        if (maxNum < Number(args[i])) {
            maxNum = Number(args[i]);
        }
    }
    if (curentNum - maxNum == maxNum) {
        console.log("Yes")
        console.log("Sum = " + maxNum)
    } else if (maxNum) {
        console.log("No")
        console.log(`Diff =  ${Math.abs(curentNum - (2 * maxNum))}`)
    }
}
halfSum ([3, 5, 5, 1]);
// 100/100