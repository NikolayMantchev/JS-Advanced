function solve(param) {
    const cars = param.slice();
    const rekords = cars.reduce((acc, curr) => {
        const [brand, model, produced] = curr.split(" | ");
        const brandModel = acc[brand];
        // probably without ternary operator
        return brandModel // !! must check if same model come, not to overwrite but to add produced
            ? {
                  ...acc,
                  [brand]: {
                      ...brandModel,
                      [model]: produced,
                  },
              }
            : {
                  ...acc,
                  [brand]: { [model]: produced },
              };
    }, {});

    const elements = Object.entries(rekords);
    for (const el of elements) {
        console.log(`${el[0]}`);
        const ob = Object.entries(el[1]);

        for (const i of ob) {
            console.log(`###${i[0]} -> ${i[1]}`);
        }
    }
}
solve([
    "Audi | Q7 | 1000",

    "Audi | Q6 | 100",

    "Audi | Q7 | 1001",

    "BMW | X5 | 1000",

    "BMW | X6 | 100",

    "Citroen | C4 | 123",

    "Volga | GAZ-24 | 1000000",

    "Lada | Niva | 1000000",

    "Lada | Jigula | 1000000",

    "Citroen | C4 | 22",

    "Citroen | C5 | 10",
]);

// 80/100
//  line
