function solve(budget, season) {
    budget = Number(budget);
    let destination;
    let typeOfVacation;
    let priceFromButget = 0;
    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            priceFromButget = budget * 0.3;
            typeOfVacation = 'Camp';
        } else if (season === 'winter') {
            priceFromButget = budget * 0.7;
            typeOfVacation = 'Hotel'
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            priceFromButget = budget * 0.4;
            typeOfVacation = 'Camp';
        } else if (season ==='winter') {
            priceFromButget = budget * 0.8;
            typeOfVacation = 'Hotel';
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        priceFromButget = budget * 0.9;
        typeOfVacation = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfVacation} - ${(priceFromButget).toFixed(2)}`);
}
solve(150, 'winter');