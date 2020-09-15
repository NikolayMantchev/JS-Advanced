function solve(input) {
    [ship1, ship2, maxHealCapacity, ...args] = input;
    const pirateShip = ship1.split(">").map(Number);
    const warShip = ship2.split(">").map(Number);
    maxHealCapacity = Number(maxHealCapacity);
    let lost = false;
    function fire(indexValue, value) {
        const inRange = indexValue < pirateShip.length && indexValue > -1;
        if (inRange) {
            const section = Number(warShip[indexValue]);
            const damage = section - Number(value);
            warShip.splice(indexValue, 1, damage);
            if (damage <= 0) {
                console.log("You won! The enemy ship has sunken.");
                return;
            }
        }
    }
    function defend(arg1, arg2, arg3) {
        const startIndex = Number(arg1);
        const endIndex = Number(arg2);
        const damage = arg3;
        const damagedSections = [];
        const inRange =
            startIndex < pirateShip.length &&
            startIndex > -1 &&
            endIndex < pirateShip.length &&
            endIndex > -1;

        if (inRange) {
            for (j = startIndex; j <= endIndex; j++) {
                pirateShip[j] -= damage;
                if (pirateShip[j] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    lost = true;
                    return;
                }
            }
        }
    }
    function repair(indexValue, value) {
        const inRange = indexValue < pirateShip.length && indexValue > -1;
        if (inRange) {
            pirateShip[indexValue] += value;
            if (pirateShip[indexValue] > Number(maxHealCapacity)) {
                pirateShip[indexValue] = Number(maxHealCapacity);
            }
        }
    }
    function status() {
        let countToRepair = pirateShip.filter((x) => x < maxHealCapacity * 0.2);
        console.log(`${countToRepair.length} sections need repair.`);
    }
    for (i = 0; i < args.length; i++) {
        const comand = args[i].split(" ");
        const comandWord = comand[0];
        const indexValue = Number(comand[1]);
        const value = Number(comand[2]);
        const damage = Number(comand[3]);
        if (comandWord === "Retire") break;
        switch (comandWord) {
            case "Fire":
                fire(indexValue, value);
                break;
            case "Defend":
                defend(indexValue, value, damage);
                if (lost) return;
                break;
            case "Repair":
                repair(indexValue, value);
                break;
            case "Status":
                status();
                break;
        }
    }
    const pirateShipSum = pirateShip.reduce((a, b) => a + b);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    const warShipSum = warShip.reduce((a, b) => a + b);
    console.log(`Warship status: ${warShipSum}`);
}

solve([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire",
]);
// 80/100
