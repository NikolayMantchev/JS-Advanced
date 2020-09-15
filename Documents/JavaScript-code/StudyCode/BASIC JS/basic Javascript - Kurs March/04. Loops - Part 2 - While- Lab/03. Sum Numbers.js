function solve(input) {
let inputText = input.shift();
    let sum = 0;
    while (inputText !== 'Stop') {
        let num = Number (inputText);
        sum += num;
        inputText = input.shift();
    }
    console.log(sum);
}
solve ([10, 20, 30, 45, 'Stop']); 