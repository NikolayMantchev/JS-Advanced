function solve(input) {
    let expectedValue = Number(input.shift());
    let paymentCash = 0;
    let paymentCard = 0;
    let totalMakedValue = 0;
    let payCounterCash = 0;
    let payCounterCard = 0;
    let command = input.shift()
    let paycounter = 0;
    while (command !== "End" && expectedValue > totalMakedValue) {

        let payment = Number(command);
        if (paycounter % 2 === 0) {

            if (payment > 100) {
                console.log("Error in transaction!")

            } else {
                console.log("Product sold!")
                paymentCash += payment;
                payCounterCash++;
            }
        }
        else if (paycounter % 2 !== 0) {
            if (payment < 10) {
                console.log("Error in transaction!")
            } else {
                paymentCard += payment;
                console.log("Product sold!")
                payCounterCard++
            }
        }
        totalMakedValue = paymentCard + paymentCash;

        paycounter++;
        command = (input.shift());
    }
    if (command === "End") {
        console.log('Failed to collect required money for charity.')
    }
    else {
        let averageCashPayment = paymentCash / payCounterCash;
        let averageCardPayment = paymentCard / payCounterCard;
        console.log(`Average CS: ${averageCashPayment.toFixed(2)}`);
        console.log(`Average CC: ${averageCardPayment.toFixed(2)}`);
    }
}
solve(
    [
        '500', '120',
        '8', '63',
        '256', '78',
        '317'
    ]
);