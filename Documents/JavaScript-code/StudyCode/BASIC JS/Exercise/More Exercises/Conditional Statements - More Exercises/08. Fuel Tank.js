function solve(fuel, liters) {
  
    liters = Number(liters);
    if ((fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") && (liters < 25)) {
        console.log(`Fill your tank with ${(fuel.toLowerCase())}!`)
    } else if ((fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") && (liters >= 25)) {
        console.log(`You have enough ${(fuel.toLowerCase())}.`)
    } else {
        console.log("Invalid fuel!")
    }
}
solve ("Gasoline", "40")