function solve(arg) {
    let n = Number (arg[0]);
    let divisibleBy2 = 0;
    let divisibleBy3 = 0;
    let divisibleBy4 = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i < n; i++) {
        let curentNumber = Number (arg[i]);
        if (curentNumber % 2 === 0) {
            divisibleBy2++;
        }
        if (curentNumber % 3 === 0) {
            divisibleBy3++;
        }
        if (curentNumber % 4 === 0) {
            divisibleBy4++;
        }
    }
    p1 = divisibleBy2 / 10 * 100;
    p2 = divisibleBy3 / 10 * 100;
    p3 = divisibleBy4 / 10 * 100;
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
solve ([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);

// judge dava 0/100
// visual studio code izliza vqrna ---- veroqtno ne opraven judge va vhodni danni o6te