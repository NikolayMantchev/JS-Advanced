function pochivka ([arg1, arg2]) {
    let butget = Number (arg1);
    let sezon = arg2.toLowerCase();
    let destinationResult = "";
    let holidayInformation = "";
    let moneySpent = 0;
    if (butget <= 100) {
        destinationResult = "Bulgaria";
        if (sezon === "summer") {
            moneySpent = 0.30 * butget;
            holidayInformation = "Camp - " + moneySpent.toFixed(2);
        } else {
            moneySpent = 0.7 * butget;
            holidayInformation = "Hotel - " + moneySpent.toFixed(2);
        }
    } else if (butget <= 1000) {
        destinationResult = "Balkans";
        if (sezon === "summer") {
            moneySpent = 0.40 * butget;
            holidayInformation = "Camp - " + moneySpent.toFixed(2);
        } else {
            moneySpent = 0.80 * butget;
            holidayInformation = "Hotel - " + moneySpent.toFixed(2);
        }
    } else {
        destinationResult = "Europe";
        moneySpent = 0.90 * butget;
        holidayInformation = "Hotel - " + moneySpent.toFixed(2);

    } console.log ("Somewhere in " + destinationResult);
        console.log(holidayInformation);
}

pochivka ([1500, "summer"]);

// 100/100 result