function arrayRotatioin(arr, rot) {
    let rotations = rot % arr.length;
    let resultArray = [];
    for (let index in arr) {
        if (index >= rotations) {
            let element = arr[index];
            resultArray.push(element);
        }
    }

    for (let index in arr) {
        if (index < rotations) {
            let element = arr[index]
            resultArray.push(element);
        } else {
            break;
        }
    }
    console.log(resultArray.join(' '))
}
arrayRotatioin([51, 47, 32, 61, 21], 2)