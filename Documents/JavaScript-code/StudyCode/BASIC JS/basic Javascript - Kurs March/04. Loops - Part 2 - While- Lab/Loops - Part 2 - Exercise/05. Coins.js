function solve(input) {
    input = Number(input.shift());
    let pennies = input * 100;       // При умножение не дава цяло число !! Корекцияна  на 31 ред
    let coinsCount = 0;
    while (pennies > 0) {
        if (pennies >= 200) {
            pennies -= 200;
            coinsCount++
        } else if (pennies >= 100) {
            pennies -= 100;
            coinsCount++;
        } else if (pennies >= 50) {
            pennies -= 50;
            coinsCount++;
        } else if (pennies >= 20) {
            pennies -= 20;
            coinsCount++;
        } else if (pennies >= 10) {
            pennies -= 10;
            coinsCount++;
        } else if (pennies >= 5) {
            pennies -= 5;
            coinsCount++;
        } else if (pennies >= 2) {
            pennies -= 2;
            coinsCount++;
        } else {
            pennies -= 1;
            coinsCount++;
        }
        pennies = Math.round(pennies);
    }
    console.log(coinsCount);
}
solve (
    [ '0.56' ]
);
//90 /100