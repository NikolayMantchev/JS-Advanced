function solve(input) {
    let flors = Number(input[0]);
    let rooms = Number(input[1])
    for (let i = flors; i >= 1; i--) {
        let printLine = "";
        for (let j = 0; j < rooms; j++) {
            if (i === flors) {
                printLine += `L${i}${j} `
                
            }
            if (i % 2 === 0 && i !== flors) {
                printLine += `O${i}${j} `
            } else if (i % 2 === 1 && i !== flors){
                printLine += `A${i}${j} `
            }
        } console.log(printLine);
    }
}
solve([9, 5]);