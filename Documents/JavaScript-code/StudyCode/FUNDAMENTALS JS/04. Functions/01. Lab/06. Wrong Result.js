function wrongResult(numOne, numTwo, numThree) {
    let result = '';
    
    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Positive';
        
    } else if (numOne <= 0 && numTwo <= 0 && numThree <= 0) {
        result = 'Negative';
        
    } 

    console.log(result);
}
wrongResult(-1,
    0,
   1 );



   //not finished