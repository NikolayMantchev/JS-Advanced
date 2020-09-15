function solve(input) {
    let numbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i <= numbers; i++) {
        let curNum = Number(input[i]);
        if (curNum % 2 === 0) {
            p1++;
        }
        if (curNum % 3 === 0) {
            p2++;
        }
        if (curNum % 4 === 0) {
            p3++;
        }
    }
    let p1Precent = (p1 / numbers) * 100;
    let p2Precent = (p2 / numbers) * 100;
    let p3Precent = (p3 / numbers) * 100;
    console.log(p1Precent.toFixed(2)+"%");
    console.log(p2Precent.toFixed(2)+"%");
    console.log(p3Precent.toFixed(2)+"%");
}
solve(
    [ '3', '3', '6', '9' ]
    );