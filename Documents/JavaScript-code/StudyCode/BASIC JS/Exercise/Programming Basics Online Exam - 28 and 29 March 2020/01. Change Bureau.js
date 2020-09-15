function solve(input) {
    let bitcoin = Number (input.shift());
    let yuanInDolar = Number (input.shift()) * 0.15;
    let comission = Number (input.shift());
    let bitcoinInLeva = bitcoin * 1168;
    euro = 1.95
    let yuanInLeva = yuanInDolar * 1.76;

    resultInEuro = (bitcoinInLeva + yuanInLeva) / euro;
    let comisionCharge = resultInEuro * comission / 100;
    console.log(Number (resultInEuro - comisionCharge).toFixed(2));
}
solve([ '1', '5', '5', '' ]);