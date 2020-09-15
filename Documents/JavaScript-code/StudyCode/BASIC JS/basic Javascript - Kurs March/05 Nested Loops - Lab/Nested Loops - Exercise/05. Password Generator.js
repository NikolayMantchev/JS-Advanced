function solve(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let output = "";
    for (let s1 = 1; s1 <= n; s1++) {
        for (let s2 = 1; s2 <= n; s2++) {
            for (let s3 = 97; s3 < 97 + l; s3++) {
                for (let s4 = 97; s4 < 97 + l; s4++) {
                    for (let s5 = 1; s5 <= n; s5++) {
                        if (s5 > s1 && s5 > s2) {
                            let thirtLetter = String.fromCharCode(s3);
                            let fourthLetter = String.fromCharCode(s4);
                            output += `${s1}${s2}${thirtLetter}${fourthLetter}${s5}` + ' '
                        }
                    }
                }
            }
        }
    }
    console.log(output);
}
solve(["2", "4"]);