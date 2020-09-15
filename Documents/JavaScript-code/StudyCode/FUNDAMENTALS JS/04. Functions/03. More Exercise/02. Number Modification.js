function averageValue(num) {
    let numHigherThanFive = 0
    let number = num.toString();
    let sumOfDigits = 0;
    let counterOfDigits = 0;
    for (let i = 0; i < number.length; i++) {
        const element = Number(number[i]);
        sumOfDigits += element;
        counterOfDigits++
        let average = sumOfDigits / counterOfDigits;
        if (average >= 5) {
            break;
        } else if (average < 5 && counterOfDigits == number.length) {
            number += '9';
        }
    }
    console.log(number)
}
averageValue(5835)