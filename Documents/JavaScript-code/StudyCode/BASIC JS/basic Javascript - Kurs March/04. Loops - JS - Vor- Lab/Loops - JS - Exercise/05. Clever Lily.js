function solve(age, washingMashine, singleToyPrice) {
    age = Number(age);
    washingMashine = Number(washingMashine);
    singleToyPrice = Number(singleToyPrice);
    let moneySaved = 0;
    let toys = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneySaved += i * 5 - 1;
        } else {
            toys++;
        }
    }
    let result = moneySaved + toys * singleToyPrice;
    let n = washingMashine - result;
    let m = result - washingMashine;
    if (washingMashine > result) {
        console.log(`No! ${n.toFixed(2)}`);
    } else {
        console.log(`Yes! ${m.toFixed(2)}`);
    }
}
solve(10, 170.00, 6);
// 100/100