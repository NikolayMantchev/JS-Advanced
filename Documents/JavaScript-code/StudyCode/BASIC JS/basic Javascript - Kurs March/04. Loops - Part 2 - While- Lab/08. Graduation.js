function solve(input) {
    let name = input.shift();
    let yearScore = Number(input.shift());
    let yearsStudied = 12;
    let counter = 1;
    let totalScore = 0;
    while (counter <= yearsStudied && !isNaN(yearScore)) {
        if (yearScore < 4) {
            yearScore = Number(input.shift());
            continue;
        }

        totalScore += yearScore;
        yearScore = Number(input.shift());
        counter++;
    }
    let averageGrade = totalScore / yearsStudied;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
}
solve(['Gosho',
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);

// 100/100