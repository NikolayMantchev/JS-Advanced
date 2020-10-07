function solve(param) {
    const [num, ...rest] = param.splice(", ");
    const result = rest.reduce((acc, curr) => {
        switch (curr) {
            case "chop":
                acc /= 2;
                break;
            case "dice":
                acc = Math.sqrt(acc);
                break;
            case "spice":
                acc += 1;
                break;
            case "bake":
                acc *= 3;
                break;
            case "fillet":
                acc = (acc * 10 * (10 * 0.8)) / 100;
                break;
            default:
                return acc;
        }
        console.log(acc);
        return acc;
    }, Number(num));
}

solve([
    "9",
    "dice",
    "spice",
    "chop",
    "bake",
    "fillet",
    "spice",
    "spice",
    "spice",
]);
100 / 100;
