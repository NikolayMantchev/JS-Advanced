function solve(input) {
    [arr, ...tokens] = input;
    newArr = arr.split(" ").map(Number);
    function swap(firstIdx, secondIdx) {
        let first = newArr[firstIdx];
        let second = newArr[secondIdx];
        newArr.splice(firstIdx, 1, second);
        newArr.splice(secondIdx, 1, first);
    }
    function multiply(ind1, ind2) {
        let first = newArr[ind1];
        let second = newArr[ind2];
        newArr.splice(ind1, 1, first * second);
    }
    function decrease(newArr) {
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] -= 1;
        }
    }
    for (let i = 0; i < tokens.length; i++) {
        const elements = tokens[i].split(" ");
        let comand = elements[0];
        let indx1 = Number(elements[1]);
        let indx2 = Number(elements[2]);
        if (comand === "end") {
            console.log(`${newArr.join(", ")}`);
            return;
        } else {
            switch (comand) {
                case "swap":
                    swap(indx1, indx2);
                    break;
                case "multiply":
                    multiply(indx1, indx2);
                    break;
                case "decrease":
                    decrease(newArr);
                    break;
            }
        }
    }
}
solve([
    "23 -2 321 87 42 90 -123",
    "swap 1 3",
    "swap 3 6",
    "swap 1 0",
    "multiply 1 2",
    "multiply 2 1",
    "decrease",
    "end",
]);
