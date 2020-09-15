function solve(arg1, arg2, arg3) {
    let studentsCount = Number(arg1);
    let tasksCount = Number(arg2);
    let energyOfTraner = Number(arg3);
    let solvedTasks = 0;
    let questionAnswered = 0;
    for (let i = energyOfTraner; i >= 0; i++) {
        energyOfTraner += 2 * 5;
        studentsCount -= tasksCount;
        questionAnswered += studentsCount * 2
        energyOfTraner -= questionAnswered * 3;
        solvedTasks += tasksCount
        if (studentsCount < 10) {
            console.log("The students are too few!");
            console.log(`Problems solved: ${solvedTasks}`);
            break;
        }
        else if (energyOfTraner <= 0) {
            console.log("The trainer is too tired!");
            console.log(`Questions answered: ${questionAnswered}`);
            break;
        }
    }
    studentsCount += (studentsCount / 10) + 1;
}
solve("20", "1", "100");
// 60/100