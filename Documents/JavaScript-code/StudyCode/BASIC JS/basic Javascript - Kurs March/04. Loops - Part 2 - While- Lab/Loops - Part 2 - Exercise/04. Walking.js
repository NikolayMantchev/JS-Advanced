function solve(input) {

    let nededSteps = 10000;
    let stepsMade = 0;

    while (stepsMade < nededSteps) {
        let comand = input.shift();                //  Взимам стринг
        if (comand === "Going home") {              // Проверка
            stepsMade += Number(input.shift())
            break;
        }
        stepsMade += Number(comand);                // Накрая го добавям като число
    }
    let notInafSteps = nededSteps - stepsMade;
    if (nededSteps <= stepsMade) {
        console.log("Goal reached! Good job!")
    } else {
        console.log(`${notInafSteps} more steps to reach goal.`)
    }
}
solve ([ '1500', '300', '2500', '3000', 'Going home', '200' ])