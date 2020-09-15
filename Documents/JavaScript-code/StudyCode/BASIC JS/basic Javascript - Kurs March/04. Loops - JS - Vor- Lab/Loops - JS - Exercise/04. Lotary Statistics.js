function solve(input) {
    input = Number(input);
    let countSingleNumbers = 0;
    let countEvenNumbers = 0;
    let countOddNumbersEndingSeven = 0;
    let countDividibleHunderd = 0;
    for (let i = 1; i <= input; i++) {
        if (i < 10 && i % 2 === 1) {
            countSingleNumbers++;
        }
        if (i % 2 === 0) {
            countEvenNumbers++;
        }
        if (i % 2 === 1 && i % 10 === 7) {
            countOddNumbersEndingSeven++;
        }
        if (100 % i === 0) {
            countDividibleHunderd++;
        }
    }
    let countSingleNumbersPercent = countSingleNumbers / input * 100;
    let countEvenNumbersPercent = countEvenNumbers / input * 100;
    let countOddNumbersEndingSevenPercent = countOddNumbersEndingSeven / input * 100;
    let countDividibleHunderdPercent = countDividibleHunderd / input * 100;
    console.log(countSingleNumbersPercent.toFixed(2) + "%");
    console.log(countEvenNumbersPercent.toFixed(2) + '%');
    console.log(countOddNumbersEndingSevenPercent.toFixed(2) + '%');
    console.log(countDividibleHunderdPercent.toFixed(2) + '%');
}
solve(49);