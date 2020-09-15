function solve(input) {
    let c = 0;
    let o = 0;
    let n = 0;
    let password = "";
    let secret = "";
    let letter = input.shift();
    while (letter !== "End") {
        let word = letter.charCodeAt(0);
        if ((word >= 65 && word < 91) || (word >= 97 && word < 123)) {
            if (c > 0 && letter == "c") {
                password += letter;
            } else if (o > 0 && letter == "o") {
                password += letter;
            } else if (n > 0 && letter == "n") {
                password += letter;
            }
            if (letter === "c") {
                c = Number(c);
                c++;
            } else if (letter === "o") {
                o = Number(o);
                o++;
            } else if (letter === "n") {
                n = Number(n);
                n++;
            }
            if (letter === "c" || letter === "o" || letter === "n") {
            } else {
                password += letter
            }
            if ((c > 0 && o > 0 && n > 0) || letter == "End") {
                password += " "
                secret += password
                c = 0;
                n = 0;
                o = 0;
                password = "";
            }
        }
        letter = input.shift()
    }
    console.log(`${secret}`)
}

solve(['%', '!', 'c', '^',
    'B', '`', 'o', "%",
    'o', 'o', 'M', ")",
    '{', 'n', '\\', 'A',
    'D', 'End']);

           // 100/100