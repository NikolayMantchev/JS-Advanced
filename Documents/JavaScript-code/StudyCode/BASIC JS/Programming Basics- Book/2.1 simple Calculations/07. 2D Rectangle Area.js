function getRerct([x1, y1, x2, y2]){
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let a = Math.abs(x1 - x2); 
    let b = Math.abs(y1 - y2);
//moje i taka da stnane  (vzima po golqmata i po-malkata ot zadadenite stonosti)
//let width = Math.max (x1 , x2) - Math.min(x1, x2);
//let height = Math.max (y1, y2) - Math.min(y1, y2);
//console.log(`Area = ${width * height}`);
//console.log (`Perimeter = ${2 * (width + height)}`);
    console.log(a * b);
    console.log(2 * (a + b));
}
getRerct(['60', '20', '10', '50']);
