const sumMinMax = (numbers, fn) => {
  const filterNum = numbers.filter(fn);
  const min = Math.min(...filterNum);
  const max = Math.max(...filterNum);
  const sum = filterNum.reduce((acc, cur) => cur + acc);

  return [sum, min, max];
}
const positionEvenOdd = input => {
  const [_, ...numbers] = input;

  const [oddSum, oddMin, oddMax] = sumMinMax(numbers, x => x % 2 === 1);
  const [evenSum, evenMin, evenMax] = sumMinMax(numbers, x => x % 2 === 0);

  console.log(oddSum);
  console.log(oddMin);
  console.log(oddMax);
  console.log(evenSum);
  console.log(evenMin);
  console.log(evenMax);
}

positionEvenOdd([6,2,6]);