function solve(input) {
    const chest = input.shift().split("|");
    function loot(arg) {
        for (const element of arg) {
            if (!chest.includes(element)) {
                chest.unshift(element);
            }
        }
    }
    function drop(arg) {
        const index = Number(arg);

        if (index < chest.length && index > -1) {
            const removed = chest.splice(index, 1);
            chest.push(removed);
        }
    }
    function steal(arg) {
        let stealedItems = chest.splice(-arg, arg);

        console.log(stealedItems.join(", "));
    }
    let argument = input.shift();
    while (argument !== "Yohoho!") {
        const lots = argument.split(" ");
        const comand = lots.shift();
        switch (comand) {
            case "Loot":
                loot(lots);
                break;
            case "Drop":
                drop(lots);
                break;
            case "Steal":
                steal(lots);
                break;
        }
        argument = input.shift();
    }
    const average = chest.join("").length;
    treasureGain = (average / chest.length).toFixed(2);
    if (average === 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${treasureGain} pirate credits.`);
    }
}
solve([
    "Diamonds|Silver|Shotgun|Gold",

    "Loot Silver Medals Coal",

    "Drop -1",

    "Drop 1",

    "Steal 6",

    "Yohoho!",
]);
// 100/100
