function solve([points]){
    points = Number(points);
    let bonus = 0;
    if (points <= 100){
            bonus = 5
    } else if (points < 1000 ) {
        bonus = 0.2 * points;
    } else  {
            bonus = 0.1 * points;
    } 
    if(points % 2 == 0){
        bonus = bonus + 1;  // bonus ++ e същото или ++bonus ; bonus += 1
    } else if (points % 10 == 5) {  // знака % e модулно деление получаваме само остатъка от делението (последната цифра)
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(bonus + points);
}

solve([2703]);