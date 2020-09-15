function solve(input) {
    let nededMoney = Number(input.shift());
    let spendMoney = Number(input.shift());
    let spendCounter = 0;
    let daysCounter = 0;
    while (spendMoney < nededMoney && spendCounter < 5) {
        let action = input.shift();
        let curentMoney = Number(input.shift());
        if (action === "spend") {
            spendMoney -= curentMoney;
            spendCounter++;
        } else if (action === "save") {
            spendMoney += curentMoney;
            spendCounter = 0;                       // Зануляваме ако не са поредни разходите
        }
        if (spendMoney < 0) {                            // Зануляваме ако е под нула
            spendMoney = 0;
        }
        daysCounter++;
    }
    if (spendCounter >= 5) {
        console.log(`You can't save the money.`);
        console.log(`${daysCounter}`);
    }
    else {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}
solve ([
    '110',   '60',    'spend',
    '10',    'spend', '10',
    'spend', '10',    'spend',
    '10',    'spend', '10'
  ])
 //100/100