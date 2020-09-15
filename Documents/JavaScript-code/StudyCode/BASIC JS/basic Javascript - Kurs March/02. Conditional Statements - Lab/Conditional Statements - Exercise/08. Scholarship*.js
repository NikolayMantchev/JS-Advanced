function solve(income, averageSuccess, minSallary) {
    income = Number(income);
    averageSuccess = Number(averageSuccess);
    minSallary = Number(minSallary);
    socialScholarship = minSallary * 0.35;
    exelenceScholarship = averageSuccess * 25;
    if ((income > minSallary) && (averageSuccess < 5.5)) {
        console.log("You cannot get a scholarship!");
    } else if ((averageSuccess >= 5.5) && (exelenceScholarship >= socialScholarship)) {
        console.log(`You get a scholarship for excellent results ${exelenceScholarship} BGN`);
    } else if ((income < minSallary) && (averageSuccess > 4.5)) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`)
    }
}
solve(300.00, 5.50, 420.00);

// 62/100