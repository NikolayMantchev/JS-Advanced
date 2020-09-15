function solve(input) {
    let typeCruise = input.shift();
    let typePlace = input.shift();
    let daysToStay = Number(input.shift());
    let prisePerDay = 0;
    if (typeCruise === "Mediterranean") {
        if (typePlace === "standard cabin") {
            pricePerDay = 27.50;
        } else if (typePlace === "cabin with balcony") {
            pricePerDay = 30.20;
        } else if (typePlace === "apartment") {
            pricePerDay = 40.50;
        }
    }
    if (typeCruise === "Adriatic") {
        if (typePlace === "standard cabin") {
            pricePerDay = 22.99;
        } else if (typePlace === "cabin with balcony") {
            pricePerDay = 25.00;
        } else if (typePlace === "apartment") {
            pricePerDay = 34.99;
        }
    }
    if (typeCruise === "Aegean") {
        if (typePlace === "standard cabin") {
            pricePerDay = 23.00;
        } else if (typePlace === "cabin with balcony") {
            pricePerDay = 26.60;
        } else if (typePlace === "apartment") {
            pricePerDay = 39.80;
        }
    }
    let cost = (daysToStay * pricePerDay) * 4;
    let costOverSevenDays = cost * 0.75;

    if (daysToStay > 7) {
        console.log(`Annie's holiday in the ${typeCruise} sea costs ${costOverSevenDays.toFixed(2)} lv.`);
    } else {
        console.log(`Annie's holiday in the ${typeCruise} sea costs ${cost.toFixed(2)} lv.`);
    }
}
    solve(['Aegean', 'standard cabin', '10', '']);