function solve(days, sladkari, torti, gofreti, palachinki){
    let moneyOneDay = Number (sladkari * ((torti * 45) + (gofreti * 5.80) + (palachinki * 3.20)));
    let moneySaved = Number (days * moneyOneDay)
    let moneyExpences = Number (moneySaved / 8);
    console.log((moneySaved - moneyExpences).toFixed(2));

}
solve(20, 8, 14, 30, 16);
//  100/100 Result