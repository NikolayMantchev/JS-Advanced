function solve(days, typeOfRoom, rating) {
    days = Number(days - 1);
    let result = 0;
    // проверка на помещението
    if (typeOfRoom === 'room for one person') {
        result = days * 18.00;
    } else if (typeOfRoom === 'apartment') {
        if (days <= 10) {                             // проверка за дни  
            result = (days * 25) * 0.70;             // крайна цена с намаление
        } else if (days >= 10 && days <= 15) {
            result = (days * 25) * 0.65;
        } else if (days > 15) {
            result = (days * 25) * 0.50;
        }
    } else if (typeOfRoom === 'president apartment') {
        if (days <= 10) {                             // проверка за дни  
            result = (days * 35) * 0.90;             // крайна цена с намаление
        } else if (days >= 10 && days <= 15) {
            result = (days * 35) * 0.85;
        } else if (days > 15) {
            result = (days * 35) * 0.80;
        }
    }
    if (rating === 'positive') {
        console.log((result + (0.25 * result)).toFixed(2));
    } else {
        console.log((result - (0.1 * result)).toFixed(2));
    }
}
solve(30, 'president apartment', 'negative');

// 100/100