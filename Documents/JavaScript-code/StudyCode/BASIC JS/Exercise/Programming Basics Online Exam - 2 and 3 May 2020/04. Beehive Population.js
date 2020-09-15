function solve(arg1, arg2) {
    let startPopulation = Number(arg1);
    let years = Number(arg2);
    let newHoney = startPopulation;
    let deadHoney = newHoney / 20 * 2;
    let newHoneyPrint = 0;
    let print= 0;
let counter = 0;
    for (let i = 1; i <= years-1; i++) {
        newHoney += 10 * 2 
         
        
       
        
        counter++;
        if (counter >= 5) {
            deadHoney = (newHoney / 50) * 5;
            
            counter = 0;
        }
    }
    console.log(`Beehive population: ${newHoneyPrint}`)
}
solve(100, 6);
