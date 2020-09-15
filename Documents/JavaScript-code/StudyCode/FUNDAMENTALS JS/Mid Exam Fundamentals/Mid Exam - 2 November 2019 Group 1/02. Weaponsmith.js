function solve(input) {
    const [weapons, ...tokens] = input;
    const weaponName = weapons.split("|");
    function moveLeft(input, names) {
        input = Number(input);
        if (input > 0 && input < weaponName.length) {
            let cuted = "";
            cuted = weaponName.splice(input, 1);
            weaponName.splice(input - 1, 0, cuted[0]);
        }
    }
    function moveRight(input, names) {
        input = Number(input);
        if (input < weaponName.length - 1 && input >= 0) {
            let cuted = "";
            cuted = weaponName.splice(input, 1);

            weaponName.splice(input + 1, 0, cuted[0]);
        }
    }
    function checkEven(input) {
        let result = [];
        for (const index in input) {
            if (index % 2 === 0) {
                result.push(input[index]);
            }
        }
        console.log(result.join(" "));
    }
    function checkOdd(input) {
        let result = [];
        for (const index in input) {
            if (index % 2 !== 0) {
                result.push(input[index]);
            }
        }
        console.log(result.join(" "));
    }
    for (let i = 0; i < tokens.length; i++) {
        const [comand1, comand2, index] = tokens[i].split(" ");
        const comand = comand1 + " " + comand2;
        if (comand === "Done") {
            console.log(`You crafted ${weaponName}!`);
        } else {
            switch (comand) {
                case "Move Left":
                    moveLeft(index, weaponName);
                    break;
                case "Move Right":
                    moveRight(index, weaponName);
                    break;
                case "Check Even":
                    checkEven(weaponName);
                    break;
                case "Check Odd":
                    checkOdd(weaponName);
                    break;
            }
        }
    }
    console.log(`You crafted ${weaponName.join("")}!`);
}
solve([
    "ha|Do|mm|om|er",
    "Move Right 0",
    "Move Left 3",
    "Check Odd",
    "Move Left 2",
    "Move Left 10",
    "Move Left 0",
    "Done",
]);
// 100/100
