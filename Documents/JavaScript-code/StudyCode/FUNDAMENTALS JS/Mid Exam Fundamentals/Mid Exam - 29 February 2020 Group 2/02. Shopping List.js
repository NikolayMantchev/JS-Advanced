function shopingList(arr) {

    list = arr.shift().split('!')

    for (let i = 0; i < arr.length - 1; i++) {

        let item = arr[i].split(' ')
        let comand = item.shift()
        let index = 0;
        let el;
        switch (comand) {
            case 'Urgent':
                if (list.includes(item)) {
                    list.unshift(item)
                }
                break;
            case 'Unnecessary':
                el = item[0]
                index = list.indexOf(el)
                if (index > 0) {
                    list.splice(index, 1)
                }
                break;
            case 'Correct':
                let old = item[0]
                index = list.indexOf(old)
                if (index > 0) {
                    list.splice(index, 1, item[1])
                }
                break;
            case 'Rearrange':
                el = item[0]
                index = list.indexOf(el)
                if (index > 0) {
                    tempEl = list.splice(index, 1);
                    list.push(tempEl)
                }
                break;
        }
    }
    console.log(list.join(', '))
}
shopingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]
)
// 40/100