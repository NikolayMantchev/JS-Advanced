function solve(flowerType, count, budget) {
    count = Number(count);
    budget = Number(budget);
    let spent = 0;
    
    if (flowerType === "Roses") {
        spent = count * 5;
        if (count > 80) {
            spent = spent * 0.9;
        }
    } else if (flowerType === "Dahlias") {
        spent = count * 3.80;
        if (count > 90) {
            spent = spent * 0.85;
        }
    } else if (flowerType === "Tulips") {
        spent = count * 2.80;
        if (count > 80) {
            spent = spent * 0.85;
        }
    } else if (flowerType === "Narcissus") {
        spent = count * 3;
        if (count < 120) {
            spent = spent * 1.15;
        }
    } else if (flowerType === "Gladiolus") {
        spent = count * 2.5;
        if (count < 80) {
            spent = spent * 1.20;
        }
    }
    if (budget >= spent) {
        console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${(budget - spent).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(spent - budget).toFixed(2)} leva more.`)
    }
}
solve ("Narcissus", 119, 360);

// 100/100