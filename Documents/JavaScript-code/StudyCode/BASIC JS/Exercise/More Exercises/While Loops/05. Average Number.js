function solve (input){
let numbers = Number (input.shift());
    let sum = 0;
    let counter = 0;
    let comand = Number (input.shift());
    while (numbers > counter){
        sum += comand;
        comand = Number (input.shift());
counter++
    }
    if (numbers === counter)
    console.log((sum/counter).toFixed(2))
}
solve([ '4', '3', '2', '4', '2' ])