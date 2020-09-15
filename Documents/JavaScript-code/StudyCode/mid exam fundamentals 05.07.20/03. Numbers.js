function solve(input) {
    let arr = input.split(" ").map(Number);

    const newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let inRange = false;
    let average = sum / arr.length;

    let filtered = arr.filter((x) => x > average).sort((a, b) => b - a);
    for (let j = 0; j < 5; j++) {
        let element = filtered[j];
        newArr.push(filtered[j]);

        if (element < average) {
            inRange = true;
            break;
        }
    }
    let no = newArr.filter((x) => x > average);
    if (no.length < 1) {
        console.log("No");
    } else {
        console.log(newArr.join(" "));
    }
}
solve("-1 -2 -3 -4 -5 -6");
