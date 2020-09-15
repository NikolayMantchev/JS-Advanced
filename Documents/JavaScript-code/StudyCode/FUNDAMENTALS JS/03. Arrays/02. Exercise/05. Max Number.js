function topInteger(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let curnum = arr[i];
        let element = [curnum];

        for (let k = i + 1; k < arr.length; k++) {

            let secondCurnum = (arr[k]);
            if (curnum <= secondCurnum) {
                curnum = secondCurnum;
                i = k;
            }
        }
newArray.push(curnum)
    }
    console.log(newArray.join(' '));
}
topInteger([27, 19, 42, 2, 13, 45, 48]);