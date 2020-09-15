const array = [1, 3, 4, 6, 8, 9];

const sumPairs = (acc, numbers) => {     // recurssion  function


    if (numbers.length === 0) return acc;   // до свършване на числата се повтаря функцията

    const [first, second, ...rest] = numbers;    // destructuring -> 

    const sum = first + (second === undefined ? 0 : second);  // check if is last 'simbol = 0' else 'stay unchanged'

    const newAcc = [...acc, sum];    // Immutable version of .push() --> acc.push(sum)

    return sumPairs(newAcc, rest);
};

const res = sumPairs([], array);

console.log(res);