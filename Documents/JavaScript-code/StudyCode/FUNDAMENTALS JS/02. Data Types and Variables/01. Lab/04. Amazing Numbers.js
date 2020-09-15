function solve(input) {
    let number = Number(input);
    let result = 0;
    let isAmasing = false;
    while (number > 0) {
        let curnum = number % 10;
        result += curnum;
        number = Math.trunc(number / 10);
    }
    while (result > 0) {
        let curnum = result % 10;
        result = Math.trunc(number / 10);
        if (curnum == 9) {
            isAmasing = true;
            break;
        }
    }
    console.log(`${input} Amazing? ${isAmasing ? 'True' : 'False'}`); 
}

solve(1233)