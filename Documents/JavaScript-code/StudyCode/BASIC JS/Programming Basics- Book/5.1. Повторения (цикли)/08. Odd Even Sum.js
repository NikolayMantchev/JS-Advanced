function solve(args){
    let n = Number(args[0]);
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 1; i < n; i += 2) {
        sumOdd += Number(args[i]);
        sumEven += Number(args[i + 1]);
    }
    if (sumEven == sumOdd) {
        console.log('Yes');
        console.log(`Sum = ${Math.abs(sumEven)}`);
    } else { 
        console.log('No');
        console.log(`Diff = ${Math.abs(sumOdd - sumEven)}`);
    }
}
solve([4, 10, 50, 60, -20]);

// judge dava 0/100
// visual studio code izliza vqrna ---- veroqtno ne opraven judge va vhodni danni o6te