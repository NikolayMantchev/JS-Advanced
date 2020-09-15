function solve(input) {
    let budget = Number(input.shift());
    let towelPrice = Number(input.shift());
    let discount = Number(input.shift());
    let umbrelaPrice = (towelPrice * 2) / 3;
    let flipFlops = umbrelaPrice * 0.75;
    let beachBag = ((flipFlops + towelPrice)) / 3;
    let totalSum = (towelPrice + umbrelaPrice + flipFlops + beachBag);
    let discountPercent = totalSum * discount / 100;
    let total = totalSum - discountPercent;
    if (budget >= total) {
        let isOk = budget - total;
        console.log(`Annie's sum is ${total.toFixed(2)} lv. She has ${isOk.toFixed(2)} lv. left.`)
    } else {
        let notOk = total - budget;
        console.log(`Annie's sum is ${total.toFixed(2)} lv. She needs ${notOk.toFixed(2)} lv. more.`);
    }

}
solve([ '30', '17', '3' ]);