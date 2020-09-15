function converter ([arg1, from, to]){
    let value = parseFloat(arg1);
   // let usd, bgn, eur, gbp, = parseInt(from);
    //let usd, bgn, eur, gbp, = parseInt(to);
    let f = from
    let t = to
    let bgn = 1;
    let usd = value * 1.79549;
    let eur = value * 1.95583;
    let gbp = value * 2.53405;
        console.log(usdbgn.toFixed(2) + 'BGN');
   
}
converter ([20, usd, bgn]);