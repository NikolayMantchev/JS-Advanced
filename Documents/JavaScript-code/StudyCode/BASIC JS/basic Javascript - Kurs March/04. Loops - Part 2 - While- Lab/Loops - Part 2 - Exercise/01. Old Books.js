function solve(input) {
    let searchedBook = input.shift();
    let totalBooks = Number(input.shift());
    let chekedBooks = 0;
    let lastBook;                                   //За да избегна повторение на 17. и 18. Ред !!
    while (chekedBooks < totalBooks) {
        curentBook = input.shift();
        lastBook = curentBook;                      // Записвам последна прочетена
        if (curentBook === searchedBook) {
            console.log(`You checked ${chekedBooks} books and found it.`)
            break;
        }
        curentBook++;
        chekedBooks++;
    }
    if (lastBook !== searchedBook) {                        // Проверявам последна прочетена
        console.log(`The book you search is not here!`);
        console.log(`You checked ${chekedBooks} books.`);
    }
}
solve(["Troy",
    "8",
    "Stronger",
    "Life Style",
    "Troy"]);