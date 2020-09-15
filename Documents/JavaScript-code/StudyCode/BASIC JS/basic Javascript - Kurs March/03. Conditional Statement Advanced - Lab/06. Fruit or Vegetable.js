function solve(input) {
    let result = '';
    if (input === 'banana' || input === 'apple' || input === 'kiwi'
        || input === 'cherry' || input === 'lemon' || input === 'grapes') {
        result = 'fruit'
    } else if (input === 'tomato' || input === 'cucumber' || input === 'pepper'
        || input === 'carrot') {
        result = 'vegetable';
    } else {
        result = 'unknown'
    }
    console.log(result);
}