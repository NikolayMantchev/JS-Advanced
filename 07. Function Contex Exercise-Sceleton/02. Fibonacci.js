function getFibonator() {
    let currNum = 0;
    let nextNum = 1;

    return () => {
        let fibNum = currNum + nextNum;
        currNum = nextNum;
        nextNum = fibNum;
        return currNum;
    };
}
function solve() {
    let fib = getFibonator();

    console.log(fib()); // 1

    console.log(fib()); // 1

    console.log(fib()); // 2

    console.log(fib()); // 3

    console.log(fib()); // 5

    console.log(fib()); // 8

    console.log(fib()); // 13
}
solve();
