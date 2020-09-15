function solve(arg1, arg2, arg3, arg4) {
    let examHours = Number(arg1);
    let examMinutes = Number(arg2);
    let arrivalHours = Number(arg3);
    let arrivalMinutes = Number(arg4);
    let examTime = (examHours * 60) + examMinutes;
    let arivalTime = (arrivalHours * 60) + arrivalMinutes;
    let totalMinutesDifference = arivalTime - examTime;
    let early = "Early";
    let onTime = "On Time";
    let late = "Late";
    let studentArrival = late;
    if (totalMinutesDifference < -30) {
        studentArrival = early;
    } else if (totalMinutesDifference <= 0) {
        studentArrival = onTime;
    }
    let result = "";
    if (totalMinutesDifference != 0) {
        let hourDifference = Math.abs(Math.trunc(totalMinutesDifference / 60));
        let minutesDifference = Math.abs(totalMinutesDifference % 60);
        if (hourDifference > 0) {
            result = hourDifference + ":" + (minutesDifference > 9 ? minutesDifference : "0" + minutesDifference) + " hours";
        } else {
            result = minutesDifference + " minutes";
        }
    } if (totalMinutesDifference < 0) {
        result += " before the start";
    } else {
        result += " after the start"

    } console.log(studentArrival);
    if (result) {
        console.log(result);
    }
}
solve(10, 00, 9, 00);

// 100/100
