function solve(arr) {
    const field = arr.shift().split("|").map(Number);

    let points = 0;
    let comandLine = arr.shift();
    while (comandLine != "Game over") {
        let curent = comandLine.split("@");
        let comand = curent[0];
        let startIndex = Number(curent[1]);
        let length = Number(curent[2]);
        if (comand === "Shoot Left") {
            if (startIndex <= field.length - 1 && startIndex > -1) {
                let index = field.length - ((length % field.length) + startIndex);
                field.splice(index, 1, field[index] - 5);
                points += 5;
            }
        }
        if (comand === "Shoot Right") {
            if (startIndex <= field.length - 1 && startIndex > -1) {
                let index = ((length % field.length) + startIndex)%5;
                field.splice(index, 1, field[index] - 5);
                points += 5;
            }
        }
        if (curent[0] === "Reverse") {
            field.reverse();
        }
        comandLine = arr.shift();
    }

    console.log(field.join(" - "));
    console.log(
        `Iskren finished the archery tournament with ${points} points!`
    );
}
solve([
    "10|10|10|10|10",
    "Shoot Left@0@2",
    "Shoot Right@2@4",
    "Shoot Right@6@5",
    "Reverse",
    "Game over",
    "",
]);

// 50/ 100 zero test ok -> everityng else suks
