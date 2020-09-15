function solve(input) {
    let n = Number(input[0]);

    let topStudents = 0;
    let failStudents = 0;
    let betweeenFour = 0;
    let betweenTree = 0;
    let sumOfAllNotes = 0;
    for (let i = 1; i <= n; i++) {
        let curentNumber = Number(input[i]);
        sumOfAllNotes += curentNumber
        if (curentNumber >= 5) {
            topStudents ++;
        }
        if (curentNumber >= 4 && curentNumber <= 4.99) {
            betweeenFour ++;
        }
        if (curentNumber >= 3.00 && curentNumber <= 3.99) {
            betweenTree ++;
        }
        if (curentNumber < 3) {
            failStudents ++;
        }

    }
    let topStudentsPercent = topStudents * 100 / n
    let betweeenFourPercent = betweeenFour * 100 / n
    let betweenTreePercent = betweenTree * 100 / n;
    let failStudentsPercent = failStudents * 100 / n;
    let averagePercent = sumOfAllNotes / n;
    console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${betweeenFourPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${betweenTreePercent.toFixed(2)}%`);
    console.log(`Fail: ${failStudentsPercent.toFixed(2)}%`);
    console.log(`Average: ${averagePercent.toFixed(2)}`);
}
solve ([6, 2, 3, 4, 5, 6, 2.2]);
// 100/100