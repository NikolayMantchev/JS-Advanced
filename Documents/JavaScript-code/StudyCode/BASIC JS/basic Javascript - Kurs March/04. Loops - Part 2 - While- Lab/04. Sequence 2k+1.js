function solve (input){
    input = Number (input.shift());
    let k = 1;
    while (k <= input) {
        console.log(k);
        k = k * 2 +1;
    }
}
solve(['31']);