function solve(arg1, arg2) {
    let month = (arg1);
    let days = Number(arg2);
    let studioPrice = 0.00;
    let apartmentPrice = 0.00;
    let studioRent = studioPrice * days;
    let apartmentRent = apartmentPrice * days;
    if ((month === "May") || (month === "October")) {
        studioPrice = 50;
        apartmentPrice = 65;
    } else if ((month === "June") || (month === "September")) {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
    } else if ((month === "July") || (month === "August")) {
        studioPrice = 76;
        apartmentPrice = 77;
    }
    studioRent = studioPrice * days;
    apartmentRent = apartmentPrice * days;
    switch (month) {
        case "May":
        case "October":
            if ((days > 7) && (days <= 14)) {
                studioRent *= 0.95;
            } else if (days > 14) {
                studioRent *= 0.70;
                apartmentRent *= 0.90;
            }
            break;
        case "June":
        case "September":
            if (days > 14) {
                studioRent *= 0.80;
                apartmentRent *= 0.90; // tuk nqkade 
                break;
            }
        default:
            if (days > 14) {
                apartmentRent *= 0.90;
                break;
            }
    } console.log(`Apartment: ${apartmentRent.toFixed(2)} lv.`)
    console.log(`Studio: ${studioRent.toFixed(2)} lv.`)
}
solve("June", 14);

// 100 / 100 Result