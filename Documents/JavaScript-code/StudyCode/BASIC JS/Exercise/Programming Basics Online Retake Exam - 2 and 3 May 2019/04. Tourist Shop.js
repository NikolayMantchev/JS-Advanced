function solve(input) {
    let budget = Number(input.shift());
    let productName = (input.shift())
    let moneyspent = 0;
    let counter = 1;
    let totalProducts = 0;
    while (productName !== "Stop") {
        if (budget < moneyspent) {
            console.log(`You don't have enough money!`)
            console.log(`You need ${(moneyspent - budget).toFixed(2)} leva!`)
    break;
        }
        let curPrice = Number(input.shift());
        if (counter % 3 === 0 && counter !== 0) {
            moneyspent += (curPrice / 2);
            counter = 0;
            totalProducts++;
        } else {
            moneyspent += curPrice;
            counter++;
            totalProducts++;
        }
        productName = input.shift();
    }
    
    if (budget > moneyspent){
        console.log(`You bought ${totalProducts} products for ${(moneyspent.toFixed(2))} leva.`)
    }
}
solve(
    ['54', 'Thermal underwear', '24', 'Sunscreen', '45']
)

//nedovarshena