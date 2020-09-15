function topInteger(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let curnum = arr[i];
        let element = [curnum];

        for (let k = i + 1; k < arr.length; k++) {

            let secondCurnum = (arr[k]);
            if (curnum === secondCurnum) {
                element.push(secondCurnum);
                i = k;
            } else {
                break;
            }
        }

        if (element.length > newArray.length) {
            newArray = element;
        }
    }
    console.log(newArray.join(' '));
}
topInteger([1, 1, 1, 2, 3, 1, 3, 3]);