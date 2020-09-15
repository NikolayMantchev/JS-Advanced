function solve(arr, commands) {
    const newArr = arr.slice();
    for (let i = 0; i < commands.length; i++) {
        let element = commands[i].split(' ');
        let command = element.shift();
        if (command === 'add') {
            add((element))
        } else if (command === 'addMany') {
            addMany(element)
        } else if (command === 'contains') {
            contains(element)
        } else if (command === 'remove') {
            remove(element)
        } else if (command === 'shift') {
            shift(element)
        } else if (command === 'sumPairs') {
            sumPairs(newArr)
        } else if (command === 'print') {
            console.log(`[ ${newArr.join(', ')} ]`)
        }
    }
    function add(number) {
        // let el = number.map(Number)     // invert to Number !not working!
        const [first, second] = number.map(Number)     // invert to Number !not working!
        return newArr.splice(first, 0, second) // inverted to Number

    }
    function addMany(number) {
        let el = number.map(((x) => x = Number(x)))
        for (let i = 1; i < el.length - 1; i++) {
            newArr.splice(el[0], 0, el[i])
        }
        return newArr;
    }
    function contains(number) {
        let el = Number(number[0])
        let index = newArr.indexOf(el)
        console.log(index)
    }
    function remove(number) {
        newArr.splice(number, 1);
        return newArr;
    }
    function shift(number) {

        for (let i = 0; i < number; i++) {
            let curent = newArr.shift()
            newArr.push(curent)
        }
    }
    
    function sumPairs(number) {
    // Not Finished sum of index 1 + 2; 3 + 4 ....  !!
    /* 
    const array = [1, 3, 4, 6, 8, 9]; // --> newArr

const sumPairs = (acc, numbers) => {     // recurssion  function
 

 if (numbers.length === 0) return acc;   // до свършване на числата се повтаря функцията

 const [first, second, ...rest] = numbers;    // destructuring -> 

 const sum = first + (second === undefined ? 0 : second);  // check if is last 'simbol = 0' else 'stay unchanged'

 const newAcc = [...acc, sum];    // Immutable version of .push() --> acc.push(sum)

 return sumPairs(newAcc, rest);
};

const res = sumPairs([], array);    // --> newArr to print!?

console.log(res);
    */
    }
}

solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'sumPairs', 'print'])


// // 8	. *Array Manipulator
// // Write a function that receives an array of integers and array of string commands 
// and executes them over the array. The commands are as follows:
// // •	add <index> <element> – adds element at the specified index (elements right 
// from this position inclusively are shifted to the right).
// // •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements 
// at the specified index.
// // •	contains <element> – prints the index of the first occurrence of the specified 
// element (if exists) in the array or -1 if the element is not found.
// // •	remove <index> – removes the element at the specified index.
// // •	shift <positions> – shifts every element of the array the number of positions to 
// the left (with rotation).
// // o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// // •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// // o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// // •	print – stop receiving more commands and print the last state of the array.
