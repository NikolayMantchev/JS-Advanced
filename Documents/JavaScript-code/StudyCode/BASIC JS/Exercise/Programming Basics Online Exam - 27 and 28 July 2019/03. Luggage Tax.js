function solve([l, b, h, typ]) {
    l = Number(l);
    b = Number(b);
    h = Number(h);
    text = String(typ);
    let volume = l * b * h;
    let lugageTax = 0;

    if ((volume > 50 && volume <= 100) && typ === "true") {
        lugageTax = 0;
    } else if (volume <= 200 && typ === "true") {
        lugageTax = 10;
    } else if (volume <= 300 && typ === "true") {
        lugageTax = 20;
    }
    if ((volume > 50 && volume < 100) && typ !== "true") {
        lugageTax = 25;
    } else if (volume <= 200 && typ !== "true") {
        lugageTax = 50;
    } else if (volume <= 300 && typ !== "true") {
        lugageTax = 100;
    } 
    if (volume <= 50) {
        lugageTax = 0;
    }
    console.log(`Luggage tax: ${lugageTax.toFixed(2)}`);
}
solve ([10, 4, 5, "true"]);