function commonElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        let coincidence = firstArr [i]
        for (let j = 0; j < secondArr.length; j++) {
            if (coincidence === secondArr[j]) {
                console.log(coincidence);
            }
        }
    }

}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

)