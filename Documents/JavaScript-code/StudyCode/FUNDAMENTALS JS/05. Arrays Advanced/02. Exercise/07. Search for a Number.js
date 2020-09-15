function searchNumber(arr1, arr2) {
    let elToTake = arr2[0];
    let elToDelete = arr2[1];
    let searchNumber = arr2[2];

    const newArr = [];

    elementsToTake(elToTake);
    removeElements(elToDelete);
    counter(newArr);

    function elementsToTake(arr) {
        for (let i = 0; i < elToTake; i++) {
            newArr.push(arr1[i]);
        }
        return newArr;
    };
    function removeElements(el) {
        for (let i = 0; i < elToDelete; i++) {
            newArr.shift()
        }
        return newArr;
    };
    function counter(arr) {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (searchNumber === arr[i]) {
                counter++
            }
        }
        return counter;
    };
    console.log(`Number ${searchNumber} occurs ${(counter(newArr))} times.`)
}
searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)