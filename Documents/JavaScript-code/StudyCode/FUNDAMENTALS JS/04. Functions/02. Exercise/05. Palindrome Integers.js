function checkPalindrome(arr) {

    function reverseNumber(number) {
        number = number.toString()
        let reversedValue = '';
        for (let i = number.length - 1; i >= 0; i--) {
            reversedValue += number[i];

        }
        if (reversedValue === number.toString()) {
            console.log('true')
        } else {
            console.log('false')
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let curentNumber = reverseNumber(arr[i]);
    }
}
checkPalindrome([32, 2, 232, 1010])
// 100/100