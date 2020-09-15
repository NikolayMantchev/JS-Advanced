function solve(num) {

    let result = 0;
    for (let i = 0; i < num.length; i++) {
        let curent = Number(num[i]);
        if (curent % 2 === 0) {
            result += curent;
        }
    }
    console.log(result);
}
solve(['2', '4', '6', '8', '10'])


// Write a program which receives an array of strings, 
// parse them to numbers and sum only the even numbers.