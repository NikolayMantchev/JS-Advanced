function solve(input) {
    const targets = input.shift().split(' ').map(Number);
 
    const tokens = input.slice();
    
    
    for (let i = 0; i < tokens.length; i++) {
        const comands = tokens[i].split(' ')
        const comand = comands[0];
        const index = Number(comands[1]);
        const power = Number(comands[2]);
        if (comand === 'Shoot') {
            if (index <= targets.length-1 && index > -1 ) {
                targets.splice(index, 1, (targets[index] - power))
            }
            if (targets[index] <= 0){
                targets.splice(index, 1,);
            }
        }
        if (comand === 'Add') {
            if (index <= targets.length-1 && index > -1 ) {
                targets.splice(index, 0, power);
            }
            else {
                console.log(`Invalid placement!`);
            }
        }
        if (comand === 'Strike') {
            let lower = index - power;
            let upper = index + power
            if (lower > -1 && upper <= targets.length - 1) {
                targets.splice(lower, upper);
                
            } else {
                console.log("Strike missed!");
            }
        }
    }
    console.log(targets.join('|'));
}
solve([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
])

// 70/100