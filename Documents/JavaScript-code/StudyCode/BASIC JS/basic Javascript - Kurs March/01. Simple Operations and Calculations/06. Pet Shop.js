function solve(numberDogs, numberAnimals){
    let paydDogs = numberDogs * 2.50;
    let paydAnimals = numberAnimals * 4;
    let result = paydDogs + paydAnimals;
    console.log(result.toFixed(2) + " lv.");
}
solve(5, 4);