function solve(arg) {
    let age = Number(arg);
    let printWord = "";
    if (age >= 0 && age <= 2) {
        printWord = "baby";
    } else if (age >= 3 && age <= 13) {
        printWord = "child";
    } else if (age >= 14 && age <= 19) {
        printWord = "teenager";
    } else if (age >= 20 && age <= 65) {
        printWord = "adult";
    } else if (age >= 66) {
        printWord = "elder";
    } else {
        printWord = "out of bounds";
    }
    console.log(printWord)
}
solve (20)
// 100/100