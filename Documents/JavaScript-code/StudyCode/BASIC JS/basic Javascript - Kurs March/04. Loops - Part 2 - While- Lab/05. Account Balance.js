function solve(input) {
    let n = Number(input.shift());
    let counter = 0;                               // брояч на итерациите
    let balance = 0.0;                            // натрупвам сумата след всяка итерация
    while (counter < n) {
        let amount = Number(input.shift());       // актуална итерация
        if (amount < 0) {
            console.log('Invalid operation!');
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        counter++                                       // Увеличавам
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
solve([3, 5.51, 69.42, 100]);


// judge dava 100/100
