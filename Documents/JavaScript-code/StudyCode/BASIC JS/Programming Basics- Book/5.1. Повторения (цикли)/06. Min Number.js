function solve (args){
    let n = Number(args[0]);
let min = Number.POSITIVE_INFINITY;
    for (let i=1; i<=n; i++) {
        let num = Number(args[i]);
        if (num < min) {
            min = num;
        }
    } 
    console.log (min);
}
solve ([1, 52, 5, 86]);