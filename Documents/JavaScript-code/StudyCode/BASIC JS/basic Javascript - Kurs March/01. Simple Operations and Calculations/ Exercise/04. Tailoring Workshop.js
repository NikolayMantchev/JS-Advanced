function solve(tab, leng, wid) {
    let tables = Number(tab);
    let lenght = Number(leng);
    let width = Number(wid);
    let rectangularTable = tables * ((lenght + 0.6) * (width + 0.6));
    let squareTable = tables * ((leng / 2) * (leng / 2));
    let priceUsd = (rectangularTable * 7) + (squareTable * 9);
    let priceBgn = priceUsd * 1.85;
    console.log(`${priceUsd.toFixed(2)} USD`);
    console.log(`${priceBgn.toFixed(2)} BGN`);
}
solve(5, 1, 0.50);

// 100/100 Result