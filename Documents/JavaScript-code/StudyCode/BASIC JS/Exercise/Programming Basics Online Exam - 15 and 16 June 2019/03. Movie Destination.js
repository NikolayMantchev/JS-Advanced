function solve(input) {
    let budget = Number(input.shift());
    let destination = input.shift();
    let sezon = input.shift();
    let days = Number(input.shift());
    let moneyPerDay = 0;
    if (sezon === "Winter") {
        if (destination === "Dubai") {
            moneyPerDay = 45000;
        } else if (destination === "Sofia") {
            moneyPerDay = 17000;
        } else if (destination === "London") {
            moneyPerDay = 24000;
        }
    } if (sezon === "Summer") {
        if (destination === "Dubai") {
            moneyPerDay = 40000;
        } else if (destination === "Sofia") {
            moneyPerDay = 12500;
        } else if (destination === "London") {
            moneyPerDay = 20250;
        }
    }
    let total = (days * moneyPerDay)
    if (destination === "Dubai") {
        total *= 0.7;
    } if (destination === "Sofia") {
        total *= 1.25;
    }
    let rest = budget - total;
    if (total <= budget) {
        console.log(`The budget for the movie is enough! We have ${rest.toFixed(2)} leva left!`)
    } else {
        console.log(`The director needs ${Math.abs(rest).toFixed(2)} leva more!`)
    }
}


solve(['400000', 'Sofia', 'Winter', '20', '']);