function digital_root(n) {
    n = n.toString();
    let result = 0;
    for (let position = 0; position < n.length; position++) {
        let curentLether = n(n[position]);
        result += curentLether;
    }
    let toPrint = 0;
    if (result > 9) {
        result = result.toString();
        for (let i = 0; i < result.length; i++) {
            let curentLether = n(result[i]);
            toPrint += curentLether;
        }
    }
    console.log(toPrint);
}
digital_root(9936)