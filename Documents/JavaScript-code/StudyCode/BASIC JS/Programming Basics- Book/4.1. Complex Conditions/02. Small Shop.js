function  cena ([produkt, city, quan]){
    let quantity = parseFloat(quan);
    
    if (city == "Sofia") {
        if (produkt == "coffee") {
            console.log (quantity * 0.50);
        } if (produkt == "water") {
            console.log (quantity * 0.80);
        } if (produkt === "beer") {
            console.log (quantity * 1.20);
        } if (produkt == "sweets") {
            console.log (quantity * 1.45);
        } if (produkt == "peanuts") {
            console.log (quantity * 1.60);
        } 
    } else if (city == "Plovdiv") {
        if (produkt == "coffee") {
            console.log (quantity * 0.40);
        } if (produkt == "water") {
            console.log (quantity * 0.70);
        } if (produkt == "beer") {
            console.log (quantity * 1.15);
        } if (produkt == "sweets") {
            console.log (quantity * 1.30);
        } if (produkt == "peanuts") {
            console.log (quantity * 1.50);
        } 
    } else if (city == "Varna") {
        if (produkt == "coffee") {
            console.log (quantity * 0.45);
        } if (produkt == "water") {
            console.log (quantity * 0.70);
        } if (produkt == "beer") {
            console.log (quantity * 1.10);
        } if (produkt == "sweets") {
            console.log (quantity * 1.35);
        } if (produkt == "peanuts") {
            console.log (quantity * 1.55);
        } 
    }
}
cena(["beer", "Sofia", 6])