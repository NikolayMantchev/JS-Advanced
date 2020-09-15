function solve(input) {
    let daysToPlay = Number(input.shift());
    let totalMoney = 0;
    let tourWin = 0;
    let tourLoose = 0;
    for (let i = 0; i < daysToPlay; i++) {
        let sport = input.shift();
        let dayWin = 0;
        let curentWin = 0;
        let curentLoose = 0;
        while (sport !== 'Finish') {
            let result = input.shift();
            if (result === "win") {
                dayWin += 20;
                curentWin++;
            } else if (result === "lose") {
                curentLoose++;
            }
            sport = input.shift();
        }
        if (curentWin > curentLoose) {
            dayWin *= 1.1;
            tourWin++;
        } else {
            tourLoose++;
        }
        totalMoney += dayWin;
    }
    if (tourWin > tourLoose) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
solve([
    '2', 'volleyball',
    'win', 'football',
    'lose', 'basketball',
    'win', 'Finish',
    'golf', 'win',
    'tennis', 'win',
    'badminton', 'win',
    'Finish'
]);

// 100/100