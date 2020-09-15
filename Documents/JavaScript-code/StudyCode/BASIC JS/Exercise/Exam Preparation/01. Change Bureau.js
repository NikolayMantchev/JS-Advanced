function solve(input) {
    let btc = Number(input.shift());
    let yuan = Number(input.shift());
    let commisionn = Number(input.shift());
    let yuanInLeva = (yuan * 0.15) * 1.76;
    let btcInLeva = btc * 1168;
    let resultInBgLeva = (yuanInLeva + btcInLeva);
    let resultEuro = (resultInBgLeva / 1.95) ;
    let komisionReverted = (resultEuro / 100) * commisionn; // commision v % ??
    let total = resultEuro - komisionReverted;
    console.log(total.toFixed(2));
}
solve(['1', '5', '5']);
// 100/100