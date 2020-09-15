function manipulations(arr) {
    const toPrint = arr.shift().split(' ').map(Number);
    const comandLines = arr.slice()  ;               

    for (let i = 0; i < comandLines.length; i++) {
        let curent = comandLines[i].split(' ');
        switch (curent[0]) {
            case 'Add':
                toPrint.push(Number(curent[1]));
                break;
            case 'Remove':
                function remove(el) {
                    if (Number(el) === 2) {
                        toPrint.splice(el, 1);
                    }
                } remove(curent[1])
                break;
            case 'RemoveAt':
                toPrint.splice(curent[1], 1);
                break;
            case 'Insert':
                toPrint.splice(Number(curent[2]), 0, Number(curent[1]))    ///
                break;
            default:
                break;
        }
    }
    console.log(toPrint.join(' '));
}
manipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)

// 80/100