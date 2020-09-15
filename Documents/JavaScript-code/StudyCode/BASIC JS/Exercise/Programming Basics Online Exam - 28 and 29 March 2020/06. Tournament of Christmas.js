function solve(input) {
    let days = Number(input.shift());      // Вход 1   за Дните

    let money = 0;
    let daymoneyWin = 0;
    let winCounter = 0;
    let looseCounter = 0;
    let totalWinCounter = 0;
    let totalLooseCounter = 0;
    for (let i = 1; i <= days; i++) {
        let sports = input.shift();       // Вход 2   за спорта на ден

        while (sports !== "Finish") {
            let result = input.shift();     // Вход 3 за резултат от спорта  
            if (result === "win") {
                daymoneyWin += 20
                winCounter++
            } else {
                looseCounter++
            }
            sports = input.shift();
        }
        if (winCounter > looseCounter) {
            money += daymoneyWin * 1.10;
            winCounter = 0;
            looseCounter = 0
            totalWinCounter++
        } else {
            totalLooseCounter++;
            money += winCounter * 20;
            winCounter = 0;
            looseCounter = 0
        }
        daymoneyWin = 0;
    }
    if (totalWinCounter > totalLooseCounter) {
        money *= 1.20;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`)
    }
}
solve([
    "3", "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish",
]);
//100/100