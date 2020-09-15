function sortArr(arr) {
    const string = arr.slice().sort((a, b) => a.localeCompare(b));
    let sortedArr = arr.sort((a, b) => {
        if ((a.length) > (b.length)) {
            return 1;
        } else if ((a.length) < (b.length)) {
            return -1;
        } else {
            return a.localeCompare(b);

        }
    });
    console.log(sortedArr.join('\n'))
}
sortArr(["Isacc", "Theodor", "Jack", "Harrison", "George"]);