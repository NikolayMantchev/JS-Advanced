function solve ([income, montsToSave, expences]){   //[ ] Стария вход на djudge
income = Number (income);
montsToSave = Number (montsToSave);
expences = Number (expences);
let sumOfExpences = income * 0.3;
let sevedPerMonth = income - (expences + sumOfExpences);
let percent = sevedPerMonth *100 / income;
console.log (`She can save ${percent.toFixed(2)}%`);
console.log((sevedPerMonth * montsToSave).toFixed(2))
}
solve(1500, 3, 800);
