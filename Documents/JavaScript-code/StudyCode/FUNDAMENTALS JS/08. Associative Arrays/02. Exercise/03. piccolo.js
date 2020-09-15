function solve(input) {
    let parkingLot = [];
    input.forEach((element) => {
        let [direction, carNumber] = element.split(", ");
        if (direction === "IN" && !parkingLot.includes(carNumber)) {
            // check carNummber
            parkingLot.push(carNumber);
        } else if (direction === "OUT" && parkingLot.includes(carNumber)) {
            parkingLot = parkingLot.filter((cN) => cN !== carNumber);
        }
    });
    if (parkingLot.length > 0) {  									  // proverka dali e vleznala!?
        console.log(parkingLot.sort((a, b) => a.localeCompare(b)).join('\n'));
	} else { 															///proverka
        console.log("Parking Lot is Empty");
    }
}

solve([
    "IN, CA2844AA",

    "IN, CA1234TA",

    "OUT, CA2844AA",

    "IN, CA9999TT",

    "IN, CA2866HI",

    "OUT, CA1234TA",

    "IN, CA2844AA",

    "OUT, CA2866HI",

    "IN, CA9876HH",

    "IN, CA2822UU",
]);
