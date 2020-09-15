function cinema([arg1, r, c]) {
    let p = arg1;
    let rows = Number(r);
    let colons = Number(c);
    fullPrice = rows * colons;
    let income = 0;

    switch (p) {
        case "Premiere":
            income = 12 * fullPrice;
            break;
        case "Normal":
            income = 7.50 * fullPrice;
            break;
        case "Discount":
            income = 5 * fullPrice;
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}

cinema (["Discount", 10, 12,])