function solve(param) {
    const result = param.reduce((acc, curr) => {
        if (acc <= curr) {
            acc = curr;
            console.log(acc);
        }
        return acc;
    }, 0);
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
