function solve(arg1, arg2, arg3) {
    let flower = arg1;
    let numFlowers = Number(arg2);
    let season = arg3;
    let honeyHarvested = 0;
    if (season === "Spring") {

        if (flower === "Sunflower") {
            honeyHarvested += numFlowers * 10;
        }
        if (flower === "Daisy") {
            honeyHarvested += numFlowers * 12 * 1.1;
        }
        if (flower === "Lavender") {
            honeyHarvested += numFlowers * 12;
        } if (flower === "Mint") {
            honeyHarvested += numFlowers * 10 * 1.1;
        }
    }
    if (season === "Summer") {

        if (flower === "Sunflower") {
            honeyHarvested += numFlowers * 8 * 1.1;
        }
        if (flower === "Daisy") {
            honeyHarvested += numFlowers * 8 * 1.1;
        }
        if (flower === "Lavender") {
            honeyHarvested += numFlowers * 8 * 1.1;
        } if (flower === "Mint") {
            honeyHarvested += numFlowers * 12 * 1.1;
        }
    } if (season === "Autumn") {

        if (flower === "Sunflower") {
            honeyHarvested += numFlowers * 12 * 0.95;
        }
        if (flower === "Daisy") {
            honeyHarvested += numFlowers * 6 * 0.95;
        }
        if (flower === "Lavender") {
            honeyHarvested += numFlowers * 6 * 0.95;
        } if (flower === "Mint") {
            honeyHarvested += numFlowers * 6 * 0.95;
        }
    }
    console.log(`Total honey harvested: ${honeyHarvested.toFixed(2)}`)
}
solve("Sunflower", 11, "Autumn"
);

//100/100