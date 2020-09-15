function solve(input) {
    let moneyInherited = Number(input.shift());
    let yearToLive = Number(input.shift());
    let ivansYear = 18;
    let moneySpent = 0;

    for (let i = 1800; i <= yearToLive; i++) {
        let curYear = Number([i]);

        if (curYear % 2 === 0) {
            moneySpent += 12000;
            ivansYear++;
        } else {
            moneySpent += 12000 + (50 * ivansYear);
            ivansYear++;
        }
    }
    let restMoney = moneyInherited - moneySpent;
    if (moneyInherited >= moneySpent) {
        
        console.log(`Yes! He will live a carefree life and will have ${restMoney.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${Math.abs(restMoney).toFixed(2)} dollars to survive.`)
    }
}
solve ([ '100000.15', '1802' ]);
// 100/100