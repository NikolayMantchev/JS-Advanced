function solve(input) {
    let sum = input[0].reduce((total, amount) => total + amount);
    for (let i = 0; i < input.length; i++) {
        let rowSum = input[i].reduce((total, amount) => total + amount);
        if (rowSum !== sum) {
            return console.log('false');
        }
    }
    for (let row = 0; row < input.length; row++) {
        let localSum = 0;
        for (let col = 0; col < input.length; col++) {
            localSum += input[col][row]
        }
        if (localSum !== sum) {
            return console.log('false');
        }
    }
    return console.log('true');
}
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]])