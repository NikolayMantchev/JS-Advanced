function validator(arg) {
    let isOk = false;
    let length = lengthCheck(arg);
    let letersAndDigits = lettersDigitCheck(arg);
    let twoDigits = twoDigitCheck(arg);

    function lengthCheck(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }
    lengthCheck(arg)

    function lettersDigitCheck(x) {
        let isOk = true;
        for (let i = 0; i < x.length; i++) {
            let simvol = x[i];
            let curent = simvol.charCodeAt(0);
            if (!((curent > 47 && curent < 58)
                || (curent > 86 && curent < 123)
                || (curent > 64 && curent < 91))) {
                isOk = false;
            }
        }
        return isOk;
    }
    lettersDigitCheck(arg)

    function twoDigitCheck(x) {     // ascii digits check at least 2 
        let isOk = false;
        counter = 0;
        for (let i = 0; i < x.length; i++) {
            let simvol = x[i];
            let curent = simvol.charCodeAt(0);
            if ((curent > 47 && curent < 58)) {
                counter++;
            } if (counter === 2) {
                isOk = true;
                return isOk;
            }
        }
        // console.log(`Password must consist only of letters and digits`);
        // console.log(`Password must have at least 2 digits`);
        // console.log(`Password must be between 6 and 10 characters`);
    }
    twoDigitCheck(arg)

    if (!letersAndDigits) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (!length) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (!twoDigits) {
        console.log(`Password must have at least 2 digits`);
    }
    if ((letersAndDigits && length && twoDigits)) {
        console.log("Password is valid")
    }

}

validator('Pa$s$s')
// 80/100
