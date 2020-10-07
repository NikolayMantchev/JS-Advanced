function solve(param) {
    let lines = param.slice();
    lines.reduce((acc, curr) => {
        let [name, price] = curr.split(" : ");
        price = Number(price);
        return { ...acc, [name]: price };
    }, {});
    let sorted = lines.sort((a, b) => {
        return a.localeCompare(b);
    });
    let char = "";
    sorted.forEach((element) => {
        if (element[0] !== char) {
            console.log(`${element[0]}\n  ${element.split(" :").join(":")}`);
        } else {
            console.log(`  ${element.split(" :").join(":")}`);
        }
        char = element[0];
    });
}
solve([
    "Appricot : 20.4",

    "Fridge : 1500",

    "TV : 1499",

    "Deodorant : 10",

    "Boiler : 300",

    "Apple : 1.25",

    "Anti-Bug Spray : 15",

    "T-Shirt : 10",
]);
// 100/100
