function solve(values) {
    const isNotEmptyStr = (x) => x !== "";
    const trimMyStr = (x) => x.trim();
    const parseIfNum = (x) =>
        Number(x) ? Number(Number.parseFloat(x).toFixed(2)) : x;

    function deserStrToArr(param) {
        return param
            .split("|")
            .filter(isNotEmptyStr)
            .map(trimMyStr)
            .map(parseIfNum);
    }

    function makeObj(values) {
        let keys = deserStrToArr(values[0]);

        return values
            .slice(1)
            .map(deserStrToArr)
            .map((x) =>
                x.reduce((res, val, i) => {
                    res[keys[i]] = val;
                    return res;
                }, {})
            );
    }

    console.log(JSON.stringify(makeObj(values)));
}

solve([
    "| Town | Latitude | Longitude |",

    "| Veliko Turnovo | 43.0757 | 25.6172 |",

    "| Monatevideo | 34.50 | 56.11 |",
]);
