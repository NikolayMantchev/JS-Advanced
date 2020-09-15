function solve(input) {
    let name = input.shift();
    
    let counter = 0;
    let sumNotes = 0;
    while (counter < 12) {
        let counterNotes = Number(input.shift());
        sumNotes += counterNotes;
        counter++;

        if (counterNotes < 4) {
            console.log(`${name} has been excluded at ${counter} grade`);
            break;
        }
    } if (counter === 12) {
        let averageNote = sumNotes / counter
        console.log(`${name} graduated. Average grade: ${averageNote.toFixed(2)}`)
    }
}
solve([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'])