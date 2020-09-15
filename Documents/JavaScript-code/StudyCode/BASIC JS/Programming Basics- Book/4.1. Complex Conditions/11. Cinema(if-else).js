function cinema([arg1, r, c]) {
    let p = arg1;
    let rows = Number(r)
    let colons = Number(c);
    let typPrice = 0;
    
    if (p == "Premiere") {
        typPrice = 12
    } else if (p == "Normal") {
        typPrice = 7.50

    } else if (p == "Discount") {
        typPrice = 5
    } console.log(`${rows * colons * typPrice} leva`)

    
}

cinema (["Normal", 21, 13,])