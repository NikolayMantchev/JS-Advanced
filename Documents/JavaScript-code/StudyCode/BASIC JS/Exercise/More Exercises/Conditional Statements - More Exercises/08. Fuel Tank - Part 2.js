function solve(fuelType, liters, card) {
    let fuel = 0;
    liters = Number(liters);
    let literDieselPrice = 2.33;
    let litterGasolnePrice = 2.22;
    let litterGasPrice = 0.93;

    if (card === "Yes") {
        literDieselPrice = literDieselPrice - 0.12;
        litterGasolnePrice = litterGasolnePrice - 0.18;
        litterGasPrice = litterGasPrice - 0.08;
    }
    if (fuelType === "Diesel") {
        fuel = liters * literDieselPrice;
    }
    else if (fuelType === "Gasoline") {
        fuel = liters * litterGasolnePrice;
    }
    else if (fuelType === "Gas") {
        fuel = liters * litterGasPrice;
    }
    if (liters >= 20 && liters <= 25) {
        fuel *= 0.92;
    } else if (liters > 25) {
        fuel *= 0.90;
    }
    console.log(fuel.toFixed(2) + " lv.")
}
solve("Diesel", "19", "No")

//90/100