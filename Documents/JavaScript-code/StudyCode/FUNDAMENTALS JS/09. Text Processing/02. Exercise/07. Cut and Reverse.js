function solve(input) {
    let halfSize = input.length / 2;
    let firstHalf = input.substring(0, halfSize);
    let secondHalf = input.substring(halfSize);
    firstHalf = firstHalf.split("").reverse().join("");
    secondHalf = secondHalf.split("").reverse().join("");
    console.log(`${firstHalf}\n${secondHalf}`);
}
solve("tluciffiDsIsihTgnizamAoSsIsihT");
// 100/100