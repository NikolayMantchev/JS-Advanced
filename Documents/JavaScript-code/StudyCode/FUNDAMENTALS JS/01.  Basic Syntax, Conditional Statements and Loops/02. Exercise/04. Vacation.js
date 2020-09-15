function solve(group, type, day) {
    let totalPrice = 0;
    if (day === "Friday") {
        if (type === "Students") {
            totalPrice = group * 8.45;
            if (group >= 30) {
                totalPrice *= 0.85;
            }
        } else if (type === "Business") {
            totalPrice = group * 10.9;
            if (group >= 100) {
                totalPrice = (group - 10) * 10.9;
            }
        } else if (type === "Regular") {
            totalPrice = group * 15;
            if (group >= 10 && group <= 20) {
                totalPrice *= 0.95;
            }
        }
    } if (day === "Saturday") {
        if (type === "Students") {
            totalPrice = group * 9.8;
            if (group >= 30) {
                totalPrice *= 0.85;
            }
        } else if (type === "Business") {
            totalPrice = group * 15.6;
            if (group >= 100) {
                totalPrice = (group - 10) * 15.6;
            }
        } else if (type === "Regular") {
            totalPrice = group * 20;
            if (group >= 10 && group <= 20) {
                totalPrice *= 0.95;
            }
        }
    } if (day === "Sunday") {
        if (type === "Students") {
            totalPrice = group * 10.46;
            if (group >= 30) {
                totalPrice *= 0.85;
            }
        } else if (type === "Business") {
            totalPrice = group * 16;
            if (group >= 100) {
                totalPrice = (group - 10) * 16;
            }
        } else if (type === "Regular") {
            totalPrice = group * 22.5;
            if (group >= 10 && group <= 20) {
                totalPrice *= 0.95;
            }
        } 
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
solve(30,
    "Students",
    "Sunday"
);
solve(40,
    "Regular",
    "Saturday"
);

// 100/100