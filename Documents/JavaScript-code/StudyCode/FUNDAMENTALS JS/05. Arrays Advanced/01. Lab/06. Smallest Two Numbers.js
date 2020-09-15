function smalestTwoNumbers(arr) {
    const result = arr.sort((a, b) => a - b).slice(0, 2);
    console.log(result.join(' '));
}
smalestTwoNumbers([30, 15, 50, 5]);