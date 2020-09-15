function solve(points) {
    points = Number(points);
    let bonusPoints = 0;

    //    Ако числото е до 100 включително, бонус точките са 5.
    if (points <= 100) {
        bonusPoints = bonusPoints + 5;
        //Ако числото е по-голямо от 100, бонус точките са 20% от числото.
    } else if (points < 1000) {
        bonusPoints = points * 0.2;
        //Ако числото е по-голямо от 1000, бонус точките са 10% от числото.
    } else {
        bonusPoints = points * 0.1
    }
    if (points % 2 === 0) {
        bonusPoints += 1;
    } else if (points % 10 === 5) {
        bonusPoints += 2
    }
    console.log(bonusPoints)
    console.log(points + bonusPoints)
    //Допълнителни бонус точки (начисляват се отделно от предходните):
    //За четно число  + 1 т.
    //За число, което завършва на 5  + 2 т.
}
solve(175);
// 100/100