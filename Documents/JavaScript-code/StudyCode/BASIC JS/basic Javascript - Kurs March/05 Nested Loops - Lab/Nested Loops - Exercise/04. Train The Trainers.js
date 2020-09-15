function solve(input) {
    let djudje = Number(input.shift());
    let presentation = input.shift();
    
    let sumofAllGrades = 0;
    let counter= 0
    while (presentation !== "Finish") {
let curentLine = presentation;
let curentSum = 0;
        
        for (let i = 0; i < djudje; i++) {
            curentNote = Number (input.shift());   // tuk nqkade 
            curentSum+= curentNote;
            counter++;
        }
        let avrg = curentSum/ djudje
        console.log(`${curentLine} - ${avrg.toFixed(2)}.`);
        sumofAllGrades+= curentSum;
        presentation = input.shift();
    }
    let allAvrg = sumofAllGrades / counter
    console.log(`Student's final assessment is ${allAvrg.toFixed(2)}.`)
}
solve(
    [
        '2', 'While-Loop',
        '6.00', '5.50',
        'For-Loop', '5.84',
        '5.66', 'Finish'
    ]
)