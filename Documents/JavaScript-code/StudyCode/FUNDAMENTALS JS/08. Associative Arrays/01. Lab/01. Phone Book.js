function solve(input) {
    let phonebook = {};
    for (let i = 0; i < input.length; i++) {
        const [name, number] = input[i].split(" ");
        phonebook[name] = number;
    }
   // for (const name in phonebook) {
   //     console.log(`${name} -> ${phonebook[name]}`);
//}
Object.keys(phonebook).forEach(n => console.log(`${n} -> ${phonebook[n]}`))  // Same as 7 & 8 row!
}
solve([
    "Tim 0834212554",

    "Peter 0877547887",

    "Bill 0896543112",

    "Tim 0876566344",
]);
