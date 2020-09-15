function solve(typ, row, collon) {
row = Number(row);
    collon = Number(collon);
    let income = 0;
    let sits = row * collon;
    if (typ === 'Premiere') {
        income = sits * 12;
    } else if (typ === 'Normal') {
        income = sits * 7.5;
    } else if (typ === 'Discount') {
        income = sits * 5;
    }
    console.log(income.toFixed(2) + ' leva')
}

solve('Premiere', 10,12);