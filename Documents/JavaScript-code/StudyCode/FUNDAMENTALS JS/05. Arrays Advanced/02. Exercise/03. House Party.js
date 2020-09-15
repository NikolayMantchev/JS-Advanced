function partyList(arr) {
    const comand = arr.slice()
    const toPrint = [];
    for (let i = 0; i < arr.length; i++) {
        let name = comand[i].split(' ')
        if (!name.includes('not')) {
            if (toPrint.includes(name[0])) {
                console.log(`${name[0]} is already in the list!`)
            } else {
                toPrint.push(name[0])
            }
        } else {

            if (!toPrint.includes(name[0])) {
                console.log(`${name[0]} is not in the list!`)
            } else {
                let index = toPrint.indexOf(name[0]);
                toPrint.splice(index)
            }

        }

    }
    console.log(toPrint.join('\n'))
}
partyList(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)