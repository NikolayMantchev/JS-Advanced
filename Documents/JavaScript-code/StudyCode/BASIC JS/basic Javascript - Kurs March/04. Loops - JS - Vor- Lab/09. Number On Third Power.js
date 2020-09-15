function solve(input) {
    input = Number(input);
    let curNum = 0;
    for (let i = 1; i < input; i += 2) {
        if (input % 2 === 0) {
            curNum += 2
            console.log(`Current number: ${curNum}. Cube: ${curNum * curNum * curNum}`)
        }
    }
    for (let i = 1; i <= input; i += 2) {
        if (input % 2 !== 0) {
            curNum += 1
            console.log(`Current number: ${i}. Cube: ${i * i * i}`)
        }
    }
}

solve(14)