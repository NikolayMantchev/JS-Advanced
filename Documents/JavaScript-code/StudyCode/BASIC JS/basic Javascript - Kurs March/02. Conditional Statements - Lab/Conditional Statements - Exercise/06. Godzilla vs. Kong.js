function solve(butget, statist, pricePerStatist) {
    butget = Number(butget);
    statist = Number(statist);
    pricePerStatist = Number(pricePerStatist);
    let decor = butget * 0.1;
    let statistExpense = statist * pricePerStatist;
    // Wrong result !!!
    if (statist > 150) {
        statistExpense = statistExpense * 0.9;
    }
    let totalExpences = statistExpense + decor; // ако е на мястото на wrong result -> Не рефрещва StatistExpence
    if (totalExpences > butget) {
        let result = totalExpences - butget
        console.log("Not enough money!");
        console.log(`Wingard needs ${(result).toFixed(2)} leva more.`);
    } else {
        let more = butget - totalExpences
        console.log("Action!");
        console.log(`Wingard starts filming with ${(more).toFixed(2)} leva left.`);
    }
} 
solve(9587.88, 222, 55.68);

//  100/100