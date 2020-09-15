function solve(input) {
    const vehicleList = input.shift().split(", ");
    let comandNumber = Number(input.shift());

    for (let i = 0; i < comandNumber; i++) {
        const element = input[i].split(", ");
        const comand = element[0];
        let tank = element[1];
        const tankName = element[2];
        let tankIndex = vehicleList.indexOf(tank);
        if (comand === "Add") {
            if (!vehicleList.includes(tank)) {
                console.log(`Tank successfully bought`);
                vehicleList.push(tank);
            } else {
                console.log("Tank is already bought");
            }
        }
        if (comand === "Remove") {
            if (vehicleList.includes(tank)) {
                vehicleList.splice(tankIndex, 1);
                console.log("Tank successfully sold");
            } else {
                console.log("Tank not found");
            }
        }
        if (comand === "Remove At") {
            tank = Number(tank);
            if (vehicleList.length - 1 > tank && tank > -1) {
                vehicleList.splice(tank, 1);
                console.log("Tank successfully sold");
            } else {
                console.log("Index out of range");
            }
        }
        if (comand === "Insert") {
            tank = Number(tank);
            if (vehicleList.length - 1 > tank && tank > -1) {
                if (!vehicleList.includes(tankName)) {
                    vehicleList.splice(tank, 0, tankName);
                    console.log("Tank successfully bought");
                } else {
                    console.log("Tank is already bought");
                }
            } else {
                console.log("Index out of range");
            }
        }
    }
    console.log(`${vehicleList.join(", ")}`);
}
solve([
    "T 34, T 34 B, T92, AMX 13 57",
    "4",
    "Add, T 34",
    "Remove, AMX CDC",
    "Insert, 10, M60",
    "Remove At, 1",
]);
// 70/100