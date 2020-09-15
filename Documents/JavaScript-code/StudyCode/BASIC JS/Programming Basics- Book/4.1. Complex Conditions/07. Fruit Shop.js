function shop ([arg1, arg2, arg3,]) {
    let fruit = arg1;
    let day = arg2;
    let quantity = parseFloat(arg3);
    let price = -1;
    if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            price = 2.70;
        } else if (fruit === "apple") {
            price = 1.25;
        } else if (fruit === "orange") {
            price = 0.90;
        } else if (fruit === "grapefruit") {
            price = 1.60;
        } else if (fruit === "kiwi") {
            price = 3;
        } else if (fruit === "pineapple") {
            price = 5.60;
        } else if (fruit === "grapes") {
            price = 4.20;
        } console.log(quantity * price);
    } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||
        day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            price = 2.50;
        } else if (fruit === "apple") {
            price = 1.20;
        } else if (fruit === "orange") {
            price = 0.85;
        } else if (fruit === "grapefruit") {
            price = 1.45;
        } else if (fruit === "kiwi") {
            price = 2.70;
        } else if (fruit === "pineapple") {
            price = 5.50;
        } else if (fruit === "grapes") {
            price = 3.85;
        } console.log(quantity * price)
    } else {
        console.log("erorr")
    }
}
shop (["kiwi", "Monday", 2.5]);

// Result 77/100