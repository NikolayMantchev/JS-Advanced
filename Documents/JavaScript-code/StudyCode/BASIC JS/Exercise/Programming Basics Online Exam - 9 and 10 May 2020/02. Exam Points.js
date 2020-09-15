function solve(arg1, arg2, arg3) {
    let tasks = arg1;
    let points = Number(arg2);
    let cours = arg3;
    let koeficent = 0;
    if (cours === "Basics") {
        switch (tasks) {
            case "1":
                koeficent = 8;
                break;
            case "2":
                koeficent = 9;
                break;
            case "3":
                koeficent = 9;
                break;
            case "4":
                koeficent = 10;
                break;
        }
    }
    if (cours === "Fundamentals") {
        switch (tasks) {
            case "1":
                koeficent = 11;
                break;
            case "2":
                koeficent = 11;
                break;
            case "3":
                koeficent = 12;
                break;
            case "4":
                koeficent = 13;
                break;
        }
    }
    if (cours === "Advanced") {
        switch (tasks) {
            case "1":
                koeficent = 14;
                break;
            case "2":
                koeficent = 14;
                break;
            case "3":
                koeficent = 15;
                break;
            case "4":
                koeficent = 16;
                break;
        }
    }
    let result = (points * koeficent) / 100;
    if (cours == "Advanced") {
        result *= 1.2;
    } else if (tasks === "1" && cours === "Basics"){
        result *= 0.8;
}
console.log(`Total points: ${result.toFixed(2)}`);
}

solve("3", "80", "Fundamentals");
//100/100