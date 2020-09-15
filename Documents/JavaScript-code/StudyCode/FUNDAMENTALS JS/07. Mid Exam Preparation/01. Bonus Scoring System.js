function solve(input) {
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());
    let atendances = input.map(Number);
    let totalBonus = Math.max(...atendances)
    let maxBonus = 0
    if (lectures > 0) {
         maxBonus = (totalBonus / lectures) * (students + bonus); //  !?
    
}
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${Math.round(totalBonus)} lectures.`);
}
solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
)
// 90/100
// check situation  input[0] == 0 