function solve(input) {
    let  turns = Number(input[0])
    let num0to9 = 0;
    let num10to19 = 0;
    let num20to29 = 0;
    let num30to39 = 0;
    let num40to50 = 0;
    let invalidNumbers = 0;
    let result = 0;
    
    for (let i = 1; i <= turns; i++) {
        let curentNumber = Number (input[i]);
        if (curentNumber >= 0 && curentNumber < 10) {
            result += curentNumber * 0.2
            num0to9++;
        } if (curentNumber >= 10 && curentNumber < 20) {
            result += curentNumber * 0.3;
            num10to19++;
        } if (curentNumber >= 20 && curentNumber < 30) {
            result += curentNumber * 0.4;
            num20to29++;
        } if (curentNumber >= 30 && curentNumber < 40) {
            result += 50;
            num30to39++;
        } if (curentNumber >= 40 && curentNumber <= 50) {
            result += 100;
            num40to50++;
        } if (curentNumber < 0 || curentNumber > 50) {
            result /= 2;
            invalidNumbers++;
        } 
    }
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${((num0to9 * 100) / turns).toFixed(2)}%`)
    console.log(`From 10 to 19: ${((num10to19 * 100) / turns).toFixed(2)}%`)
    console.log(`From 20 to 29: ${((num20to29 * 100) / turns).toFixed(2)}%`)
    console.log(`From 30 to 39: ${((num30to39 * 100) / turns).toFixed(2)}%`)
    console.log(`From 40 to 50: ${((num40to50 *100) / turns).toFixed(2)}%`)
    console.log(`Invalid numbers: ${((invalidNumbers * 100) / turns).toFixed(2)}%`)

}
solve (
    [ '3', '12', '-23', '46' ]
);