function solve([arg1, arg2, arg3, arg4, arg5, arg6]) {
    let reservationDay = Number(arg1);
    let reservationMonth = Number(arg2);
    let accomodationDay = Number(arg3);
    let accomodationMonth = Number(arg4);
    let leftDay = Number(arg5);
    let leftMonth = Number(arg6);
    let moneyPerDay = 0;

    if (reservationMonth < accomodationMonth || reservationDay < accomodationDay - 10) {
        moneyPerDay += 25 * (leftDay - accomodationDay);
    } else {
        moneyPerDay = 30 * (leftDay - accomodationDay);
    }
    if (reservationMonth < accomodationMonth) {
        moneyPerDay *= 0.8;
    }

    console.log(`Your stay from ${accomodationDay}/${accomodationMonth} to ${leftDay}/${leftMonth} will cost ${moneyPerDay.toFixed(2)}`)
}
solve([10, 5, 15, 5, 18, 5]);