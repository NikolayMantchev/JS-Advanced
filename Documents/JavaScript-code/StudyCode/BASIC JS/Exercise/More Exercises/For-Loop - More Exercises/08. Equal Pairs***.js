function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    let sums = [];
 
    for(let i = 1; i <= n ; i++) {
        let firstNum = Number(input.shift());
        let secondNum = Number(input.shift());
        sum = firstNum + secondNum;
        sums.push(sum);            //  new aray
    }
   // console.log(sums);
    sum = 0;
    for(let k = 0; k < n; k++) {
        sum += sums[k];
    }
   
    if(sum / n == sums[0]) {
        console.log(`Yes, value=${sums[0]}`);
    } else {
        let max = Math.max(...sums);
        let min = Math.min(...sums);
        let maxdiff = max - min;
        console.log(`No, maxdiff=${maxdiff}`);
    }
 
}
 
solve([
   4, 1, 1, 3, 1, 2, 2, 0, 0
]);
/// 87/100 Решението не е мое

/*function solve (input){
input = Number (input.shift())
let sumOfPairs= 0;
let diference =0;
let maxdiference = 0;
for (let i=0; i<=input*2; i++){
let curnum = Number (input[i])
}
}
solve (
    [ '2', '1', '2', '2', '2' ]
) */