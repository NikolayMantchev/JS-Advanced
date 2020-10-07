function solve(param) {
    const lines = param.map((x) => x.split(" / "));
    const data = [];
    for (const iterator of param) {
        let [name, level, items] = iterator.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];
        data.push({ name, level, items });
    }
    console.log(JSON.stringify(data));
}

solve([
    "Isacc / 25 / Apple, GravityGun",

    "Derek / 12 / BarrelVest, DestructionSword",

    "Hes / 1 / Desolator, Sentinel, Antara",
]);
// 100/100
