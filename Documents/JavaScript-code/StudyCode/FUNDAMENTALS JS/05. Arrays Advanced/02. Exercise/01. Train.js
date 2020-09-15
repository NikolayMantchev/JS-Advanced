function solve(arr) {
    let train = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());
    let comands = arr.slice();

    for (let i = 0; i < arr.length; i++) {

        let curentComand = comands[i].split(' ');

        if (curentComand[0] === 'Add') {
            train.push(Number(curentComand[1]));
        } else {
            let pasengers = Number(curentComand[0]);
            for (let j = 0; j < train.length; j++) {
                let wagon = train[j];
                if (wagon + pasengers <= capacity) {
                    train[j] += pasengers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
}
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)