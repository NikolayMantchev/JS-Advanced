/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */


var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    
];

// your code goes here
for (let row = 0; row < numbers.length; row++) {
   for (let col = 0; col < numbers[row].length; col++) {
    let printNumber = numbers[row][col]
    // if (printNumber % 2 === 0) {
    //     printNumber = "even"
    // } else {
    //     printNumber = "odd"
    // }   
    console.log(printNumber)
       
   }
    
}