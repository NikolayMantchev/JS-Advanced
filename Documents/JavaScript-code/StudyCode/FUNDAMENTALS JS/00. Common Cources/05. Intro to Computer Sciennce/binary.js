function solution(integerNum, binaryNum) {
    let binary = integerNum.toString(2).split(``);
   
    let binaryCounter = 0;
    for (let i = 0; i < binary.length; i++) {
        let currentDigit = Number(binary[i]);
        if(currentDigit === binaryNum) {
            binaryCounter++;
        }
    }
 
    console.log(binaryCounter);
}
solution(20, 0);
solution(15, 1);
solution(10, 0);