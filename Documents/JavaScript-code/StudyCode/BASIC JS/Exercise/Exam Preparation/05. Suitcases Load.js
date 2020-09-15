function solve(input) {
    let plainVolume = Number(input.shift());
    let koferVolume = input.shift();
    let curentKoferr = 0;
    let plaseLeft = plainVolume;

    while (koferVolume !== "End") {
        let kofer = Number(koferVolume);

        if (plaseLeft > kofer) {
            if (curentKoferr % 3 === 0) {
                plaseLeft -= (kofer * 1.1);
            } else if (curentKoferr % 3 !== 0) {
                plaseLeft -= kofer;
            }
            koferVolume = input.shift()
        } else {
            console.log(`No more space!`);
            break;
        }
        if (koferVolume === "End") {
            console.log(`Congratulations! All suitcases are loaded!`)
        }
        curentKoferr++;
    }
    console.log(`Statistic: ${curentKoferr} suitcases loaded.`)
}
solve(['700.5', '180', '340.6', '126', '220', '']);

// 70 /100;