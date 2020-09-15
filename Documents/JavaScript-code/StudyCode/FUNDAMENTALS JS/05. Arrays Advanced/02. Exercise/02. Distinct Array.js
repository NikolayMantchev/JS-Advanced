function removeRepeating(arr) {

    const copyArr = arr.slice();

    const toPrint = [];
    for (let i = 0; i < arr.length; i++) {
        if (!toPrint.includes(copyArr[i])) {
            toPrint.push(copyArr[i]);
        }

    }
console.log(toPrint.join(' '))
}
removeRepeating([7, 8, 9, 7, 2, 3, 4, 1, 2])