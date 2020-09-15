function comision(arg1, arg2) {
    let sales = parseFloat(arg2);
    let comision = -1;
    let town = (arg1);
    if (town == "Sofia") {
        if (sales >= 0 && sales <= 500) {
            comision = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) {
            comision = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            comision = sales * 0.08;
        } else if (sales > 10000) {
            comision = sales * 0.12;
        }
    } else if (town == "Varna") {
        if (sales >= 0 && sales <= 500) {
            comision = sales * 0.045;
        } else if (sales > 500 && sales <= 1000) {
            comision = sales * 0.075
        } else if (sales > 1000 && sales <= 10000) {
            comision = sales * 0.1
        } else if (sales > 10000) {
            comision = sales * 0.13
        }
    } else if (town == "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            comision = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) {
            comision = sales * 0.08
        } else if (sales > 1000 && sales <= 10000) {
            comision = sales * 0.12
        } else if (sales > 10000) {
            comision = sales * 0.145
        }
    } if (comision >= 0) {
        console.log(comision.toFixed(2));
    } else {
        console.log("error")
    }
}

comision (["Plovdiv", 499.99]);


// 100/100 