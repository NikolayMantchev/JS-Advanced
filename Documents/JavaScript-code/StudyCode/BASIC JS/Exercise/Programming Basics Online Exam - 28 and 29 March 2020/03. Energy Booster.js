function solve(input) {
    let fruit = input.shift();
    let size = input.shift();
    let setsOrdred = Number(input.shift());
    let pricePerSet = 0;
    if (fruit === "Watermelon" && size === "small") {
        pricePerSet = 56 * 2;
    } else if (fruit === "Watermelon" && size === "big") {
        pricePerSet = 28.70 * 5;
    }
    if (fruit === "Mango" && size === "small") {
        pricePerSet = 36.66 * 2;
    } else if (fruit === "Mango" && size === "big") {
        pricePerSet = 19.60 * 5;
    }
    if (fruit === "Pineapple" && size === "small") {
        pricePerSet = 42.10 * 2;
    } else if (fruit === "Pineapple" && size === "big") {
        pricePerSet = 24.80 * 5;
    }
    if (fruit === "Raspberry" && size === "small") {
        pricePerSet = 20 * 2;
    } else if (fruit === "Raspberry" && size === "big") {
        pricePerSet = 15.20 * 5;
    }
    let price = pricePerSet * setsOrdred
    if (price >= 400 && price <= 1000) {
        console.log(`${(price * 0.85).toFixed(2)} lv.`)
    } else if (price > 1000) {
        console.log(`${(price * 0.5).toFixed(2)} lv.`)
    } else {
        console.log(`${price.toFixed(2)} lv.`)
    }


}
solve(['Pineapple', 'small', '1']);