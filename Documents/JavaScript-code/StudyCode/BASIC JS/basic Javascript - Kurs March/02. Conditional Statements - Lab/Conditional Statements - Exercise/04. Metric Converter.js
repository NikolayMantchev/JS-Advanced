function solve(input, metrick, toConvert) {
    input = Number(input);
    let meter = 1;
 
    if (metrick === "cm") {
        meter = input / 100;
    } else if (metrick === "mm") {
        meter = input / 1000;
    } else if (metrick === "m") {
        meter = input
    }
    if (toConvert === "cm") {
        console.log(`${(meter * 100).toFixed(3)}`)
    } else if (toConvert === "mm") {
        console.log(`${(meter * 1000).toFixed(3)}`)
    } else {
        console.log(`${(meter).toFixed(3)}`)
    }
}
    solve(45, "cm", "mm");