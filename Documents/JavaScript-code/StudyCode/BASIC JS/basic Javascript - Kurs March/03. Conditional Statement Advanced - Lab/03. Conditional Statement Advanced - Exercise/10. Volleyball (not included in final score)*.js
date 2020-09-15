function solve(typeOfYear, holidays, weekendsAtHome) {
    weekendsAtHome = Number(weekendsAtHome);
    holidays = Number(holidays);
    let weekendsInSofia = (48 - weekendsAtHome) * 0.75;
    let holidaysPlayed = holidays * 2 / 3;
    let sumOfPlayed = weekendsAtHome + weekendsInSofia;
    let totalPlayed = weekendsInSofia + holidaysPlayed + weekendsAtHome;
    if (typeOfYear === 'leap') {
        totalPlayed *= 1.15;

    } console.log(Math.floor(totalPlayed));
}
solve('leap', 5, 2);

//  100/100