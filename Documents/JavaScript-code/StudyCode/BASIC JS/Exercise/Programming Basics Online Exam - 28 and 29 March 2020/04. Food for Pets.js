function solve(input) {
    let days = Number(input.shift());
    let food = Number(input.shift());
    let dogEated = 0;
    let catEated = 0;
    let counter = 0;
    let biscuitAward = 0;
    for (let i = 0; i <= days * 2 - 1; i++) {
        let curentNum = Number(input.shift());
        if (i % 2 === 0) {
            dogEated += curentNum;
        }
        else {
            catEated += curentNum;
        }
        if (i % 3 === 0 ) {

            biscuitAward += curentNum;
        }
        counter++
    }
    let foodEaten = dogEated + catEated;
    let foodEatenPercent = foodEaten / food * 100;
    let biscuitEaten = biscuitAward * 0.1;
    let dogEatedPercent = dogEated / foodEaten * 100;
    let catEatedPercent = catEated / foodEaten * 100;
    console.log(`Total eaten biscuits: ${Math.round(biscuitEaten)}gr.`);
    console.log(`${foodEatenPercent.toFixed(2)}% of the food has been eaten.`)
    console.log(`${(dogEatedPercent).toFixed(2)}% eaten from the dog.`)
    console.log(`${(catEatedPercent).toFixed(2)}% eaten from the cat.`)
}
solve([
    '3', '500',
    '100', '30',
    '110', '25',
    '120', '35'
]);

// 0/100  