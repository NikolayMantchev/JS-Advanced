function solve(arg1,arg2){
let students = Number (arg1);
let tasks = Number (arg2);
let submisions = students * Math.ceil(tasks * 2.8);
let additionlal = students * Math.trunc(tasks / 3);
let total = submisions + additionlal;
let storage = Math.ceil(total / 10) * 5;
console.log(`${storage} KB needed`);
console.log(`${total} submissions`);
}
solve(11, 7);
//100/100