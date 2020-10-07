function solve(param) {
    const el = param.pop();
    let newArr = [];
    for (let i = 0; i < param.length; i += Number(el)) {
        const element = param[i];
        newArr.push(element);
    }
    console.log(newArr.join("\n"));
}
solve(["5", "20", "31", "4", "20", "2"]);
solve(["dsa", "asd", "test", "tset", "2"]);
