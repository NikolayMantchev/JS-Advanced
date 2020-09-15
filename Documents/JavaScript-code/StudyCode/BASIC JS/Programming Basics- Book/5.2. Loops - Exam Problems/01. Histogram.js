function solve(args) {
    let n = Number(args[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let p1Percentage = 0;
    let p2Percentage = 0;
    let p3Percentage = 0;
    let p4Percentage = 0;
    let p5Percentage = 0;
    for (let i = 1; i <= n; i++) {
        let curentNum = Number(args[i]);
        if (curentNum < 200) {
            p1++;
        } else if (curentNum < 400) {
            p2++;
        } else if (curentNum < 600) {
            p3++;
        } else if (curentNum < 800) {
            p4++;
        } else {
            p5++;
        }
    }
    p1Percentage = (p1 / n * 100).toFixed(2);
    p2Percentage = (p2 / n * 100).toFixed(2);
    p3Percentage = (p3 / n * 100).toFixed(2);
    p4Percentage = (p4 / n * 100).toFixed(2);
    p5Percentage = (p5 / n * 100).toFixed(2);
    console.log(p1Percentage + "%")
    console.log(p2Percentage + "%")
    console.log(p3Percentage + "%")
    console.log(p4Percentage + "%")
    console.log(p5Percentage + "%")
}
solve([7, 800, 801, 250, 199, 399, 599, 799]);

// judge dava 0/100
// visual studio code izliza vqrna ---- veroqtno ne opraven judge va vhodni danni o6te