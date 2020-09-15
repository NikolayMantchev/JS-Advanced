function solve(input) {
    let n = Number(input.shift());
    let output = '';
    for (let d1 = 1; d1 <= n; d1++) {
        for (let d2 = 1; d2 <= n; d2++) {
            for (let d3 = 1; d3 <= n; d3++) {
                for (let d4 = 1; d4 <= n; d4++) {
                    let firstMagick = n % d1 === 0;
                    let secondMagick = n % d2 === 0;
                    let thirthMagick = n % d3 === 0;
                    let fourthMagick = n % d4 === 0;
                    if (firstMagick && secondMagick && thirthMagick && fourthMagick) {
                        output += (`${d1}${d2}${d3}${d4} `);
                    }
                }
            }
        }
    }
    console.log(output);
}
solve(
    ['3']
);

// 10/100