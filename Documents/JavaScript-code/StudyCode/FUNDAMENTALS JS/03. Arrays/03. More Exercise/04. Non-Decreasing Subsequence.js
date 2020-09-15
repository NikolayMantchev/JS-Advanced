function solve(arg) {
    let input = []
    input.push(arg[0]);

    for (let i = 0; i < arg.length; i++) {
        const element = arg[i];
        if (element >= arg[i - 1]) {
            input.push(element)
        }
    }
    console.log(input.join(' '))
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])



/*  Write a function that extracts only those numbers that form a non-decreasing
 subsequence. In other words, you start from the first element and continue to
  the end of the given array of numbers. Any number which is LESS THAN the
   current biggest one is ignored, alternatively if it’s equal or higher than
    the current biggest one you set it as the current biggest one and you
    continue to the next number. */