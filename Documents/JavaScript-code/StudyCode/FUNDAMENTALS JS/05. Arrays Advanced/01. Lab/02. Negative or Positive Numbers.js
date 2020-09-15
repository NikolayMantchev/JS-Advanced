function sortNum(arr) {
    let newArr = []
    while (arr.length > 0) {
        let curent = arr.shift()
        if (curent >= 0) {
            newArr.push(curent);
        } else {
            newArr.unshift(curent);
        }
    }
    for (const iterator of newArr) {

        console.log(iterator)
    }
}
sortNum([7, -2, 8, 9])