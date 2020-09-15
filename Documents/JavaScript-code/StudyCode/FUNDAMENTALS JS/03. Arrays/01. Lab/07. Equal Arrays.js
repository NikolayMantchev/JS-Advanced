function solve(arr1, arr2) {
    let sum = 0;
    let firstArray = [];
    let secondArray = [];
    let isTrue = false;
    let index = 0;
    for (let i = 0; i < arr1.length; i++) {
        firstArray = Number(arr1[i]);
        secondArray = Number(arr2[i]);
        if (firstArray === secondArray) {
            sum += firstArray;
        } else {
            isTrue = true;
            index = i
            break;
        }
    }
    if (isTrue === false) {
        console.log(sum);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}
solve(['1'], ['10'])

/*
Write a program which receives two string arrays and print
on the console whether they are identical or NOT.
Arrays are identical if their elements are equal. If the arrays
are identical find the sum of the first one and
print on the console following message:
'Arrays are identical. Sum: {sum}'
If the arrays are NOT identical find the first index where the
arrays differ and print on the console following message:
'Arrays are not identical. Found difference at {index} index'.
*/