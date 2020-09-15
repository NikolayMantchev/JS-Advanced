function solve(arg1,arg2) {
    let bienen = Number(arg1);
    let flowers = Number(arg2);
    let honeyProduced = bienen * flowers * 0.21;
    let honeyCombs = Math.trunc(honeyProduced / 100);
    let honeyLeft = honeyProduced % 100
    console.log(`${honeyCombs} honeycombs filled.`);
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`)
}
solve(25, 6400);