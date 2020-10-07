function solve(param) {
    const sign = param.pop();
    const print = param.reduce((acc, curr) => {
        acc.push(curr);
        return acc;
    }, []);
    console.log(print.join(sign));
}

solve(["One", "Two", "Three", "Four", "Five", "-"]);
