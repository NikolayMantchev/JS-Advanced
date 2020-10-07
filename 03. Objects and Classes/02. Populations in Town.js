function solve(param) {
    let town = {};
    param.forEach((line) => {
        [city, population] = line.split(" <-> ");
        population = Number(population);
        if (!town.hasOwnProperty(city)) {
            town = { ...town, [city]: { population } };
        } else {
            const curCity = town[city];
            town = {
                ...town,
                [city]: {
                    ...curCity,
                    population: curCity.population + population,
                },
            };
        }
    });
    for (const city in town) {
        console.log(`${city} : ${town[city].population}`);
    }
}
55;
solve([
    "Sofia <-> 1200000",

    "Montana <-> 20000",
    "Sofia <-> 2000",

    "New York <-> 10000000",

    "Washington <-> 2345000",

    "Las Vegas <-> 1000000",
]);
