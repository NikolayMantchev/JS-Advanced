function solve (arr){

    console.log(Number(arr[0]) + Number (arr[arr.length - 1]));

}
solve (['20', '30', '40'])

function solveSecond (arr){
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    console.log(first + last);
}
solveSecond(['20', '30', '40'])
