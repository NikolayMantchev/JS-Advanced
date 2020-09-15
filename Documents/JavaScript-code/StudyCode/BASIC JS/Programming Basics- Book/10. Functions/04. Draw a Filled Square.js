function printHeaderFooter(num) {
    console.log("-".repeat(2 * num));
}

function PrintMidleRow(num) {
    let line = "-";
    for (let i = 0; i < num - 1; i++) {
        line += "\\/";
    }
    line += "-";
    console.log(line);     // тук маи трябва да се  повтаря ..
}

function solve([n]) {
    const num = Number(n);
    printHeaderFooter(num);
    PrintMidleRow(n);      // srednite redove ?, nqmam ideq kak da povtorq funkciqta n -2 pati
    printHeaderFooter(num);
}
solve([8]);