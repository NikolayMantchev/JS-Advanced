function UsdToEur ([usd]){
    let dolar = parseFloat(usd);
    let bgn = dolar * 1.79549;
    console.log(bgn.toFixed(2));
}
UsdToEur(['12.5']);