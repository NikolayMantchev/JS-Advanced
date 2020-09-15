function sumSecond ([arg1, arg2, arg3]){
    let firstComp = parseInt(arg1);
    let secondComp = parseInt(arg2);
    let thirdComp = parseInt(arg3);
    let totalSeconds = firstComp + secondComp + thirdComp;
    let minutes = 0;
    if (totalSeconds > 60){
        minutes++;
        totalSeconds -= 60;
    }
    if (totalSeconds >= 60){
        minutes++;
        totalSeconds -= 60;
    }
    if (totalSeconds < 10){
        console.log(`${minutes}:0${totalSeconds}`);
    } else {
        console.log(`${minutes}:${totalSeconds}`)
    }
}
sumSecond([35, 45, 44]);