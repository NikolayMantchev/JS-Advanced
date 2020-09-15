function solve(input) {
    let days = Number(input.shift());
    let hours = Number(input.shift());
    let curentPrice = 0;
    let price = 0;
    for (let currentDay = 1; currentDay <= days; currentDay++) {

        for (let currentHour = 1; currentHour <= hours; currentHour++) {

            if (currentDay % 2 !== 0 && currentHour % 2 !== 0) {
                price++;
                curentPrice++;
            } else if (currentDay % 2 !== 0 && currentHour % 2 === 0) {
                price += 1.25;
                curentPrice += 1.25;
            }
            if (currentDay % 2 === 0 && currentHour % 2 === 0) {
                price++;
                curentPrice++;
            } else if (currentDay % 2 === 0 && currentHour % 2 !== 0) {
                price += 2.5;
                curentPrice += 2.5;
            }
        }
        console.log(`Day: ${currentDay} - ${curentPrice.toFixed(2)} leva`);
        curentPrice = 0;
    }
    console.log(`Total: ${price.toFixed(2)} leva`)
}
solve(['2', '5'])