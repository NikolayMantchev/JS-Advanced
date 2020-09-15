function solve(arr, magicNumber) {

    let uniqPairsArr = [];

    for (let i = 0; i < arr.length; i++) {
        let firstCurent = arr[i];

        for (let k = i + 1; k < arr.length; k++) {
            let secondCurent = arr[k];
            if (firstCurent + secondCurent === magicNumber) {
                console.log(firstCurent + ' ' + secondCurent);
            }

        }

    }

}
solve ([1, 7, 6, 2, 19, 23],
    8
    )