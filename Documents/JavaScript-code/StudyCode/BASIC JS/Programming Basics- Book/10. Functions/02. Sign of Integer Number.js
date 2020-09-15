
function print(n) {
    function printSign(num) {
         num = Number(n)
        if (num > 0) {
            console.log(`The number ${num} is positive.`);
        } else if (num < 0) {
            console.log(`The number ${num} is negative.`);
        } else {
            console.log(`The number ${num} is zero.`)
        }
    }
    printSign();
}
print(3)
// 100/100