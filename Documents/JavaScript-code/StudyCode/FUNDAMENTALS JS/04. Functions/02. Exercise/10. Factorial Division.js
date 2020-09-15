function factorialOfTwo(firstNum, secondNum) {

    function factorial(num) {
        let factorial = 1;
        for (let i = num; i > 0; i--) {
            factorial *= [i];
        }
        return factorial;
    }
let result = factorial(firstNum) / factorial(secondNum);
    console.log(result.toFixed(2));
}

factorialOfTwo(6, 2)