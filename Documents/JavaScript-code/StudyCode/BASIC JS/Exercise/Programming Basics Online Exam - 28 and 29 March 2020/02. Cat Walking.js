function solve(input) {
    let minWalkPerDay = Number(input.shift());
    let timesWalkDaily = Number(input.shift());
    let caloriesIncomDayly = Number(input.shift());
    let CaloriesBurned = minWalkPerDay * timesWalkDaily * 5;



    if ((caloriesIncomDayly / 2) <= CaloriesBurned) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${CaloriesBurned}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${CaloriesBurned}.`)
    }
}
solve(['15', '2', '500', '']);