function time(arg1, arg2, arg3){
    let first = Number (arg1);
    let second = Number (arg2);
    let thirth = Number (arg3);
    let totalSeconds = first + second + thirth;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds <= 9) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

//100/100