function solve(input) {
    let names = input[0].split(", ");
    let raceInfo = {};

    for (const data of input.slice(1)) {
        let namesMach = data.match(/[A-Za-z]+/g).join("");

        if (namesMach && names.includes(namesMach)) {
            let distanceMach = data.match(/[\d]/g);
            let distance = calcDistance(distanceMach);
            if (!raceInfo[namesMach]) {
                raceInfo[namesMach] = 0;
            }
            raceInfo[namesMach] += distance;
        }
    }
    function calcDistance(arr) {
        let totalDistance = 0;
        if (arr === null) {
            return totalDistance;
        }
        arr.forEach((digit) => {
            totalDistance += Number(digit);
        });
        return totalDistance;
    }
    let topTree = Object.keys(raceInfo)
        .sort((racerOne, racerTwo) => raceInfo[racerTwo] - raceInfo[racerOne])
        .slice(0, 3);

    console.log(`1st place: ${topTree[0]}`);
    console.log(`2nd place: ${topTree[1]}`);
    console.log(`3rd place: ${topTree[2]}`);
}
solve([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race",
]);
