function solve(budget, sesson, fischerCount) {
    budget = Number(budget);
    fischerCount = Number(fischerCount);
    let moneyNeeded = 0;
    let boatPrice = 0;
    let discount = 0;
    if (sesson === 'Spring') {
        boatPrice = 3000;
    } else if (sesson === 'Summer' || sesson === 'Autumn') {
        boatPrice = 4200;
    } else if (sesson === 'Winter') {
        boatPrice = 2600;
    }

    if (fischerCount <= 6) {
        boatPrice *= 0.9;
    } else if (fischerCount <= 11) {
        boatPrice *= 0.85;
    } else {
        boatPrice *= 0.75
    }
    if (fischerCount % 2 === 0 && sesson !== 'Autumn') {
        boatPrice *= 0.95;
    }
    let result = budget - boatPrice;
    if (result >= 0) {
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${Math.abs(result).toFixed(2)} leva.`)
    }
}
solve(3000, 'Summer', 11);