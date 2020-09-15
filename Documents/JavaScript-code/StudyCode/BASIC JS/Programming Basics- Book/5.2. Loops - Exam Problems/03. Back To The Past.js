function solve(arg1, arg2) {
    let money = Number(arg1);
    let yearToLive = Number(arg2);
    let yearsOld = 18;
    for (let curentYear = 1800; curentYear <= yearToLive; curentYear++) {
        if (curentYear % 2 === 0) {
            money -= 12000;
        } else {
            money -= (12000 + 50 * yearsOld);
        }
        yearsOld++;
    }
    if ( money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${Math.abs((money).toFixed(2))} dollars to survive.`)
    }
}
solve(50000, 1802);

// judge dava 0/100
// visual studio code izliza vqrna ---- veroqtno ne opraven judge va vhodni danni o6te
