function solve(input) {
    let honey = Number(input.shift());
    let name = input.shift();
    let totalHoneySaved = 0;
    let flag = false;
    while (name !== "Winter has come") {
        honeySaved = 0;
        for (let i = 0; i < 6; i++) {
            let curNum = Number(input.shift());
            honeySaved += curNum;

        }
        if (honeySaved <= 0) {
            console.log(`${name} was banished for gluttony`);
            
        }
        totalHoneySaved += honeySaved
        name = input.shift();
    }
    
    if (honey <= totalHoneySaved) {

        let moreHoney = totalHoneySaved - honey;
        console.log(`Well done! Honey surplus ${moreHoney.toFixed(2)}.`)
    } else {
        lessHoney = honey - totalHoneySaved;
        console.log(`Hard Winter! Honey needed ${lessHoney.toFixed(2)}.`)
    }
}
solve(
    [1000,
"Maya",
-50,
-10,
-20.70,
20.40,
10.30,
40,
"Yama",
50,
10,
20,
30,
100,
100,
"Winter has come"]
);