function solve (days, kgFood, kgDogPerDay, kgCatPerDay, kgTurtlePerDay){
    let dogNeed = days * kgDogPerDay;
    let catNeed = days * kgCatPerDay;
    let turtleNeed = days * (kgTurtlePerDay / 1000);
    let totalFood = dogNeed + catNeed + turtleNeed;
    let foodDifferenece = kgFood - totalFood;
    if (totalFood <= kgFood){
console.log(`${Math.floor (foodDifferenece)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(Math.abs(foodDifferenece))} more kilos of food are needed.`)
    }
}
solve (
    "5",
    "10",
    "2.1",
    "0.8",
    "321");
