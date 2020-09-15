function solve (input) {
    let text = input.shift();

    while (text !== 'Stop'){
        
        console.log(text);
        text = input.shift();
    }

}
solve (['soft', 'mana', 'Stop'])