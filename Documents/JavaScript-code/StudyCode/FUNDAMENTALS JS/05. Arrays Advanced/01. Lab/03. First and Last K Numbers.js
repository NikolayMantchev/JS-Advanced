function solve(arr) {
    let k = arr.shift();
    let firstElement = arr.slice(0, k);
    let secondElement = arr.slice(arr.length - k);
    console.log(firstElement.join(' '));
    console.log(secondElement.join(' '));
}
solve([3,
    6, 7, 8, 9]

)