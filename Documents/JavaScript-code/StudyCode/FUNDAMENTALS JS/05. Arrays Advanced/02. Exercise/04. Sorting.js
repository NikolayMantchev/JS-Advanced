function sorting(arr) {
    arr.sort((a, b) => a - b);
    let length = arr.length;

    const toPrint = [];
    for (let i = 0; i < length / 2; i++) {
        let curBig = arr.pop();
        let curSmall = arr.shift();
        toPrint.push(curBig, curSmall);
    }
    console.log(toPrint.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
