function solve(arg1, arg2) {
    let numberToFix = Number(arg1);
    let rounder = Number(arg2);
    if (rounder > 15) {
        rounder = 15;
    }
    let print = parseFloat(numberToFix.toFixed(rounder));
    console.log(`${print}`)
}
solve(3.1415926535897932384626433832795, 2);