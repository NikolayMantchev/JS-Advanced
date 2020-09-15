function solve(arr) {
    
    const moneyNeeded = Number(arr[0]);
    const savedPerMonth = moneyNeeded * 0.25;
    const month = Number(arr[1]);
    curentSaved = 0;
    for (let i = 1; i <= month; i++) {
        if (i % 3 === 0) {
            curentSaved *= 0.84;
        }
        if (i !== 1 && i % 4 === 0) {
            curentSaved *= 1.25;
        }
        curentSaved += savedPerMonth;
    }
    let inuf = curentSaved - moneyNeeded;
    let notInufMoney = moneyNeeded - curentSaved;
    if (inuf >= 0) { // without = same result
        console.log(`Bravo! You can go to Disneyland and you will have ${inuf.toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${notInufMoney.toFixed(2)}lv. more.`);
    }
}
solve(['3265',
    '3']

)
// 40/100