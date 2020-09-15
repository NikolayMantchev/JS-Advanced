function mergeArrays(arrOne, arrTwo) {
    let result= [];

    let curentResult = 0;
    for (let index in arrOne) {

        let elementOne = arrOne[index];
        let elementTwo = arrTwo[index];
        if (index % 2 === 0) {
            result.push((Number(elementOne) + Number(elementTwo)) + '');
        } else {
            result.push(elementOne + elementTwo);
        }
    }
    console.log(result.join(' - '));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);