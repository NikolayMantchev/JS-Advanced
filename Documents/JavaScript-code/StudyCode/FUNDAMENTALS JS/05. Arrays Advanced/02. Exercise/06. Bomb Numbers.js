function bombDamage(arr, bombPower) {
    let bomb = Number(bombPower[0]);
    let range = Number(bombPower[1]);
    const numbers = arr.slice();
    let index = numbers.indexOf(bomb);
    while (index > -1) {
        let lowerRange = numbers.splice(Math.max((index - range), 0),  Math.min(range, index)); // remove left (make sure tto take index in range 0 to length-1)
        index = numbers.indexOf(bomb);
        let upperRange = numbers.splice(index, (range + 1));   // remove right from curent Index
        index = numbers.indexOf(bomb);
    }
    function sumNum(arr) {
        sum = 0;
        for (const n of arr) {
            sum += n;
        } 
        return sum;
    }
    console.log(sumNum(numbers));
}
bombDamage([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]
)