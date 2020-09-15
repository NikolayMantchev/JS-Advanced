function moneyForAlkohol(WiskiInLv, litersBeer, litersWine, litersRakia, litersWiski) {
    let priceRakia = Number (WiskiInLv / 2);
    let priceWine = Number (priceRakia * 0.6);
    let priceBira = Number (priceRakia * 0.2);
    let money = Number ((litersBeer * priceBira) + (litersWine * priceWine) + (litersRakia * priceRakia) + (litersWiski * WiskiInLv));
    console.log((money).toFixed(2));
} 
moneyForAlkohol (50, 10, 3.5, 6.5, 1);
//  100/100 Result