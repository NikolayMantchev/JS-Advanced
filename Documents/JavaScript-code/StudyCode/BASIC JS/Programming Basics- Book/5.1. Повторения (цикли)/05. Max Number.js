function solve (input){
    let n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;
    for (let i=1; i <= n; i++) {
        let sum = Number(input[i]);
        if (sum > max) {
            max = sum;
        }
    } 
    console.log("max = " + max )
}
solve([2, 100 ,99]);