function solve([arg1, arg2, arg3, arg4]) {
    let hourArival = Number(arg3);
    let minArival = Number(arg4);
    let hourExam = Number(arg1);
    let minExam = Number(arg2);
    let examTime = (hourExam * 60) + minExam;
    let arivalTime = (hourArival * 60) + minArival;
    let minDifference = examTime - arivalTime;
    let early = "Early";
    let onTime = "On Time";
    let late = "Late";
    let hh = Math.floor(minDifference / 60);
    let mm = Math.abs(minDifference % 60);
    switch (minDifference) {
        case ((minDifference >= 60)):
            console.log(early);
            console.log(`${hh} : ${mm} hours before the start`);
            break;
        case ((minDifference < 60 && minDifference > 30)):
            console.log(early);
            console.log(`${mm} minutes before the start`);
            break;
        case ((minDifference < 30) && (minDifference >= 0)):
            console.log(onTime)
            console.log(`${mm} minutes before the start`);
            break;
        case ((minDifference < 0) && (minDifference >= -60)):
            console.log(late);
            console.log(`${mm} minutes after the start`);
            break;
        case (minDifference < -60):
            hh = Math.floor(minDifference / 60);
            mm = minDifference % 60;
            console.log(late);
            console.log(`${hh} : ${mm} hours after the start`);
            break;
    }

}


solve([10, 00, 11, 35]);
//  0/0  Result