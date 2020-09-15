function solve(input) {
    let energy = Number(input.shift());
    let distance = Number(input.shift());
    let count = 0;
    while (distance !== "End of battle") {
        distance = Number(distance);
        if (energy >= distance) {
            energy -= distance;
            count++;
            if (count % 3 === 0) {
                energy += count;
            }
        } else {
            return console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
        }
        distance = input.shift();
    }
    console.log(`Won battles: ${count}. Energy left: ${energy}`);
}
solve([
    '100', '10', '10',
    '10', '1', '2',
    '3', '73', '10'
]
)
// 100/100