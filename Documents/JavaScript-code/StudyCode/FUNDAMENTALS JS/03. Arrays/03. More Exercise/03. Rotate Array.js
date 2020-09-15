function solve(input) {
    const newArray = input;
    let rotationAmount = Number(newArray.pop());
    for (let i = 0; i <= rotationAmount - 1; i++) {
        let curnum = newArray.pop(input.length - 1 - i);
        newArray.unshift(curnum);
    }
    console.log(newArray.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])