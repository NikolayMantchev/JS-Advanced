function solve(arg1, arg2, arg3, arg4, arg5, arg6) {
    let holidayPrice = Number(arg1);
    let puzzelPiece = Number(arg2);
    let dollPiece = Number(arg3);
    let bearPiece = Number(arg4);
    let minionPiece = Number(arg5);
    let truckPiece = Number(arg6);
    let totalPieces = puzzelPiece + dollPiece + bearPiece + minionPiece + truckPiece;
    let profit = ((puzzelPiece * 2.6) + (dollPiece * 3) + (bearPiece * 4.10) + (minionPiece * 8.2) + (truckPiece * 2));
    if (totalPieces >= 50) {
        profit = profit * 0.75
    } 
    profit = profit * 0.90 // 10% discount
    
    if (profit >= holidayPrice) {
        console.log(`Yes! ${(profit - holidayPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(holidayPrice - profit).toFixed(2)} lv needed.`)
    }
}
solve (320, 8, 2, 5, 5, 1,);