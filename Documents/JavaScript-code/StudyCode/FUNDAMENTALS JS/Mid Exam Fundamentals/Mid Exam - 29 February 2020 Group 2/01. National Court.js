function solve(arr) {
    let average = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    let hoursNeeded = 0;
    let restHours = Number (arr[3]);
    while (restHours > 0) {
        hoursNeeded++;
        if (hoursNeeded % 4 == 0) {
           continue;
        }
        restHours = restHours - average;
    }
    console.log(`Time needed: ${hoursNeeded}h.`)
}
solve([ '5', '6', '4', '14' ]
);
// 100/100