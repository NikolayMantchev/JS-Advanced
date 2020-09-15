function positionOddEven(numbers) {
    const [count, ...input] = numbers;

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;

    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let position = 1; position <= count; position++) {
        const currentNumber = Number(input[position - 1]);

        if (position % 2 === 1) {
            oddSum += currentNumber;
            if (currentNumber < oddMin) {
                oddMin = currentNumber;
            }
            if (currentNumber > oddMax) {
                oddMax = currentNumber;
            }

        } else {
            evenSum += currentNumber;
            if (currentNumber < evenMin) {
                evenMin = currentNumber;
            }
            if (currentNumber > evenMax) {
                evenMax = currentNumber;
            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if (oddMin !== Number.MAX_SAFE_INTEGER && oddMax !== Number.MIN_SAFE_INTEGER) {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    } else {
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if (evenMin !== Number.MAX_SAFE_INTEGER && evenMax !== Number.MIN_SAFE_INTEGER) {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    } else {
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }
}

positionOddEven([6,2,6]);