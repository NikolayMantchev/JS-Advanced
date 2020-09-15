function solve(arg1, arg2, arg3) {
    let complex = Number(arg1);
    let rotated = Number(arg2);
    let pages = Number(arg3);
    let output = "";
    if (complex >= 80) {
        if (rotated >= 80) {
            if (pages >= 8) {
                output = "Legacy";
            }
        }
    }
    if (complex >= 80) {
        if (rotated >= 80) {
            if (pages <= 10) {
                output = "Master";
            }
        }
    }
    if (rotated >= 50) {
        if (pages >= 2) {
            output = "Hard";
        }
    }

    if (complex <= 30) {
        if (pages <= 1) {
            output = "Easy";
        }
    }
    if (complex <= 10) {
        output = "Elementary";
    }
    if (output == "") {
        output = "Regular"
    }
    console.log(output)
}
solve("90", "60", "2");

// 80/100