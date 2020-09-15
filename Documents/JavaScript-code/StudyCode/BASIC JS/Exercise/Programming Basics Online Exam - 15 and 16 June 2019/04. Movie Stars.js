function solve(input) {
    let budget = Number(input.shift());
    let result = budget;
    let actorName = (input.shift());
    while (actorName !== 'ACTION') {
        if (result >= 0) {
            let nameLegth = Number(actorName.length);
            if (nameLegth > 15) {
                result -= result * 0.2
            } else {
                let salary = Number(input.shift());
                result -= salary
            }
        }
        actorName = (input.shift());
    }
    if (result >= 0) {
        console.log(`We are left with ${result.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${Math.abs(result).toFixed(2)} leva for our actors.`)
    }
}
solve(['600000',
    'Michael Aniston',
    '400000',
    'Pamela Anderson',
    '200010',
    'ACTION']
);
  // 100 / 100