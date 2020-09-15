function solve(tons) {
    let n = Number(tons[0]);
    let busTransportedTons = 0;
    let truckTransportetTons = 0;
    let trainTransportedTons = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(tons[i]);
        if (currentNumber <= 3) {
            busTransportedTons += currentNumber;
        } else if (currentNumber <= 11) {
            truckTransportetTons += currentNumber;
        } else {
            trainTransportedTons += currentNumber;
        }
    }
    let sumOfTons = busTransportedTons + trainTransportedTons + truckTransportetTons
    let percetBus = busTransportedTons / sumOfTons * 100;
    let percentTruck = truckTransportetTons / sumOfTons * 100;
    let percentTrain = trainTransportedTons / sumOfTons * 100;
    let averageBus = busTransportedTons * 200;
    let averageTruck = truckTransportetTons * 175;
    let averageTrain = trainTransportedTons * 120;
    console.log(((averageBus + averageTruck + averageTrain) / sumOfTons).toFixed(2));
    console.log(`${percetBus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}
solve([5, 2, 10, 20, 1, 7]);
