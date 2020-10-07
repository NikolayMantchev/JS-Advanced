function solve(param) {
    const iterNum = Number(param.pop());
    for (let i = 0; i < iterNum; i++) {
        let a = param.pop();
        param.unshift(a);
    }
    console.log(param.join(" "));
}

solve(["1", "2", "3", "4", "2"]);
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);

solve();
