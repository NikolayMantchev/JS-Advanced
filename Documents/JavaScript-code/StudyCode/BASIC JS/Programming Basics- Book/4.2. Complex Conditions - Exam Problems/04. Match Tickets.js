function solve([arg1, arg2, arg3]) {
    let budget = parseFloat(arg1);
    let kategory = arg2;
    let people = Number(arg3);
    let transport = 0;
    let moneyForTickets = 0.00;
    let moneyDifference = 0.00;
    if ((people < 4)) {
        transport = budget * 0.75;
    } else if (people <= 9) {
        transport = budget * 0.60;
    } else if (people <= 24) {
        transport = budget * 0.50;
    } else if (people <= 49) {
        transport = budget * 0.40;
    } else if (people >= 50) {
        transport = budget * 0.25;
    }
    switch (kategory) {
        case "Normal":
            moneyForTickets = people * 249.99;
            break;
        case "VIP":
            moneyForTickets = people * 499.99;
            break;
        default:
            moneyForTickets = people * 249.99;
            break;
    }
    moneyDifference = budget - transport - moneyForTickets;
    let result = "Yes! You have " + moneyDifference.toFixed(2) + " leva left."
    if (moneyDifference < 0) {
        result = "Not enough money! You need " + Math.abs(moneyDifference).toFixed(2) + " leva.";
        console.log(result);
    } else {
        console.log(result);
    }
}
solve ([30000, "VIP", 49]);
// 100/100 Result