function solve(num, arr) {
    let sliceNum = [];
     
    for (let i = 0; i < num; i++) {
        sliceNum [num - 1 - i] = arr [i]  // index ot 4isloto vzimame otzad napred
    }
    console.log(sliceNum.join(' '));
}
solve(3, [10, 20, 30, 40, 50])

/*
Write a program which receives a number n and an array of elements. Your task is to create a new array with n
numbers, reverse it and print its elements on a single line, space separated. */