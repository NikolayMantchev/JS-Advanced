function solve(age, gender) {
    age = Number(age);
    let result = 0;
    if (gender === 'm'); {
        if (age >= 16)
            result = 'Mr.'
        else {
            result = 'Master'
        }
    }
    if (gender === 'f') {
        if (age >= 16) {
            result = 'Ms.'
        } else {
            result = 'Miss'
        }

    }
    console.log(result);
}
solve(12, 'f');