function solve(input) {
    let badGrades = Number(input.shift());
    let countOfBadGrades = 0;
    let problemSolved = 0;
    let scoreSum = 0;
    let lastProblem;

    while (countOfBadGrades < badGrades) {
        let problem = input.shift();
        let score = Number(input.shift());
        if (score <= 4) {
            countOfBadGrades++
        }
        if (problem === "Enough") {
            let averageScore = scoreSum / problemSolved;
            console.log(`Average score: ${averageScore.toFixed(2)}`)
            console.log(`Number of problems: ${problemSolved}`)
            console.log(`Last problem: ${lastProblem}`)
            break;
        }
        problemSolved++
        scoreSum += score;
        lastProblem = problem
    }
    if (countOfBadGrades >= badGrades) {
        console.log(`You need a break, ${countOfBadGrades} poor grades.`)
    }
}
solve([ '2', 'Income', '3', 'Game Info', '6', 'Best Player', '4', '' ]
);

// 100/100