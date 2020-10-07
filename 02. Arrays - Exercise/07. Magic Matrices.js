function solve(array) {
    result = false;
    let row = 0;
    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        row = el.reduce((acc, curr) => (acc += curr), 0);
        let col = 0;
        for (let j = 0; j < array.length; j++) {
            const element = array[j][i];
            col += element;
        }
        if (row === col) {
            result = true;
        } else {
            result = false;
        }
    }
    console.log(result);
}

solve([
    [4, 5, 6],

    [6, 5, 4],

    [5, 5, 5],
]);
solve([
    [11, 32, 45],

    [21, 0, 1],

    [21, 1, 1],
]);

solve([
    [1, 0, 0],

    [0, 0, 1],

    [0, 1, 0],
]);
80/100