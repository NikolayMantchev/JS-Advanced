function solve(input) {
    input.pop();
    let bookShelf = input.shift().split('&');
    input.forEach(el => {
        let token = el.split(' | ');
        const comand = token[0]
        const curentBook = token[1];
        const secondBook = token[2];
        if (comand === "Add Book") {
            bookShelf.unshift(curentBook);
        } else if (comand === "Take Book") {
            if (bookShelf.includes(curentBook)) {
                bookShelf.splice(bookShelf.indexOf(curentBook), 1)
            }
        } else if (comand === "Swap Books") {
            if (bookShelf.includes(curentBook) && bookShelf.includes(secondBook)) {
                let firstIndex = bookShelf.indexOf(curentBook);
                let secondIndex = bookShelf.indexOf(secondBook);
                bookShelf.splice(firstIndex, 1, secondBook);
                bookShelf.splice(secondIndex, 1, curentBook);
            }
        } else if (comand === "Insert Book") {
            bookShelf.push(curentBook)
        } else if (comand === "Check Book") {
            if (bookShelf[Number(curentBook)] !== undefined) {
                console.log(bookShelf[Number(curentBook)]);
            }
        }
    });
    console.log(bookShelf.join(', '));
}
solve(['Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done'

])

// 80/100  