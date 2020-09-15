function solve(arr) {
    let handlePerHour = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    let students = Number(arr[3]);
    let hoursNeeded = 0;

    while (students > 0) {
        hoursNeeded++;
        if (hoursNeeded % 4 === 0) {
            continue;
        }
        students -= handlePerHour;
    }
    console.log(`Time needed: ${hoursNeeded}h.`);
}
solve(["1", "2", "3", "45"]);

// 100/100
