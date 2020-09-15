function equalSums(arr) {
    let result = 'no'
    for (let index = 0; index < arr.length; index++) {
        let leftSum = 0;
        let rigthSum = 0;
        for (let i = 0; i < index; i++) {
            let leftNum = arr[i];
            leftSum += leftNum;
        }
        for (let k = index + 1; k < arr.length; k++) {
            let rigthNum = arr[k];
            rigthSum += rigthNum;

        }
        if (leftSum === rigthSum) {
            result = index;
            break;
        }
    }
    console.log(result);
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])