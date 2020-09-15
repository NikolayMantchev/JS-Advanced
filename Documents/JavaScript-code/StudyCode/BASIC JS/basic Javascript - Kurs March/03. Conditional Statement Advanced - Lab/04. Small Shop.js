function solve(product, toun, amount) {
    amount = Number(amount);
    let result = 0;
    if (toun == 'Sofia') {
        if (product == 'coffee') {
            result = amount * 0.50;
        } else if (product == 'water') {
            result = amount * 0.80;
        } else if (product == 'beer') {
            result = amount * 1.20;
        } else if (product == 'sweets') {
            result = amount * 1.45;
        } else if (product == 'peanuts') {
            result = amount * 1.60;
        }
    } if (toun == 'Plovdiv') {
        if (product == 'coffee') {
            result = amount * 0.40;
        } else if (product == 'water') {
            result = amount * 0.70;
        } else if (product == 'beer') {
            result = amount * 1.15;
        } else if (product == 'sweets') {
            result = amount * 1.30;
        } else if (product == 'peanuts') {
            result = amount * 1.50;
        }
    } if (toun == 'Varna') {
        if (product == 'coffee') {
            result = amount * 0.45;
        } else if (product == 'water') {
            result = amount * 0.70;
        } else if (product == 'beer') {
            result = amount * 1.10;
        } else if (product == 'sweets') {
            result = amount * 1.35;
        } else if (product == 'peanuts') {
            result = amount * 1.55;
        }
        
    }
    console.log(result);
}
solve('peanuts', 'Plovdiv', 1)




//

