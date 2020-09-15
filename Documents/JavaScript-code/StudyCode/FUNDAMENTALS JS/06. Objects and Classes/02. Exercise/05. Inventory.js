function solve(input) {

    const heros = [];
    input.forEach(line => {
        const tokens = line.split(' / ');
        const name = tokens[0];
        const level = Number(tokens[1]);
        const items = tokens[2]
            .split(', ')
            .sort((a, b) => a.localeCompare(b))
        heros.push({ name, level, items })
    });
    heros.sort((a, b) => a.level - b.level)
    heros.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(", ")}`);
    });
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)