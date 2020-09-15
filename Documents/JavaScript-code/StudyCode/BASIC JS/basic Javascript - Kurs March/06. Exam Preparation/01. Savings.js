function solve(input){
let income = Number(input.shift());
let months = Number(input.shift());
let personalExpences = Number(input.shift());
let unexpectedExpences = income  * 0.3;
let moneySaved = income - (personalExpences + unexpectedExpences);
let PercentSaved = moneySaved * 100 / income
console.log(`She can save ${PercentSaved.toFixed(2)}%`);
console.log((moneySaved * months).toFixed(2))
}
solve ([ '1500', '3', '800' ]);