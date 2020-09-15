function solve(input) {
    let kgFood = Number(input.shift());
    let gramsEatedperDay = input.shift();
    let gramFood = kgFood * 1000;
    let totalGramsEated = 0;
    while (gramsEatedperDay !== "Adopted") {
        let diference = Number (gramsEatedperDay)
        
        totalGramsEated += diference
        gramsEatedperDay = input.shift();
    }
    if (gramFood >= totalGramsEated) {
        console.log(`Food is enough! Leftovers: ${gramFood - totalGramsEated} grams.`)
    } else {
        console.log(`Food is not enough. You need ${totalGramsEated - gramFood} grams more.`)
    }
}
    solve([
        '4', '130',
        '345', '400',
        '180', '230',
        '120', 'Adopted',
        '', ''
    ]);