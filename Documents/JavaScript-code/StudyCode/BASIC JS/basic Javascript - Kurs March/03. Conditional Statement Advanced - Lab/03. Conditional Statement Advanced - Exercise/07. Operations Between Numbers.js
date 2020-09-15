function solve(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result = 0;
    let evenOdd;
    if (operator === '/') {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`)
        }
    } else if (operator === '%') {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`)
        }
    }
    if (operator === '+' || operator === '-' || operator === '*') {
        if (operator === '+') {
            result = n1 + n2;
        }
        else if (operator === '-') {
            result = n1 - n2;
        }
        else {
            result = n1 * n2;
        }
        if (result % 2 === 0) {
            evenOdd = 'even'
        } else {
            evenOdd = 'odd'
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
    }
}


solve(10, 12, '+');