function perfectNumber(number) {
    let divisor = 0;
    for (let i = 0; i < number; i++) {
        if (number % i == 0) {
            divisor += i;
        }
    }
    if (divisor == number) {
        console.log('We have a perfect number!')
    } else {
        console.log("It's not so perfect.")
    }
}
perfectNumber(6)