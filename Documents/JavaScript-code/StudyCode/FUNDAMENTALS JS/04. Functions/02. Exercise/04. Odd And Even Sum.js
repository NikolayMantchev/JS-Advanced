function oddEvenSum(number) {
    function oddSum(x) {
        let oddResult = 0;
        let evenResult = 0;
        while (number > 0) {
            if (number % 2 === 0) {
                evenResult += (number % 10);
            } else {
                oddResult += (number % 10);
            }
            number = Math.trunc(number / 10)
        }
        console.log(`Odd sum = ${oddResult}, Even sum = ${evenResult}`)
    }
    oddSum(number)
}
oddEvenSum(3495892137259234);