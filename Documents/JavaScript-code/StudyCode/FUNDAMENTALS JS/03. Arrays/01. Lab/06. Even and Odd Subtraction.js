function solve(num) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < num.length; i++) {
        let curent = Number(num[i]);
        if (curent % 2 === 0) {
            even += curent;
        } else {
            odd += curent;
        }
    }
    let result = even - odd;
    console.log(result);
}
solve([2, 4, 6, 8, 10])

// Write a program that calculates the difference between the 
// sum of the even and the sum of the odd numbers in an array.