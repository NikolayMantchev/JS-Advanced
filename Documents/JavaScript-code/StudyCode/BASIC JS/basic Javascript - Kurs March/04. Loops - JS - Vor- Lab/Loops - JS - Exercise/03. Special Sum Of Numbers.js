function solve(start, end, divider) {
    start = Number(start);
    end = Number(end);
    divider = Number(divider);
    let sumOfNumbers = 0;
    for (let i = start; i <= end; i++) {
        if (i % divider === 0) {
            sumOfNumbers += i;
        }
    } console.log(sumOfNumbers);
}
solve(61,125,25)