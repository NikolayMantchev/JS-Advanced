function solve(stock, order) {
    const products = {}


    for (let i = 0; i < stock.length; i += 2) {
        const name = stock[i].split(' ');
        const quantity = Number(stock[i + 1]);
        products[name] = quantity;
    }
    for (i = 0; i < order.length; i += 2) {
        const name = order[i];
        const quantity = Number(order[i + 1]);
        if (products[name] === undefined) {
            products[name] = 0;               // create thi product
        }
        products[name] += quantity

    }
    for (const name in products) {
        console.log(`${name} -> ${products[name]}`);
    }

}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)