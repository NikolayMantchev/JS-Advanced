function solve(input) {
    const [cards, ...tokens] = input;
    const stack = cards.split(":");
    const newStack = [];
    function add(card) {
        if (stack.includes(card)) {
            let index = stack.indexOf(card);
            stack.splice(index, 1);
            newStack.push(card);
        } else {
            console.log("Card not found.");
        }
    }
    function insert(card, index) {
        index = Number(index);
        inRange = index >= 0 && index < stack.length;
        if (stack.includes(card) && inRange) {
            let cardIndex = stack.indexOf(card);
            stack.splice(cardIndex, 1);
            newStack.splice(index, 0, card);
        } else {
            console.log("Error!");
        }
    }
    function remove(card) {
        if (!newStack.includes(card)) {
            console.log("Card not found.");
        } else {
            let cardIndex = newStack.indexOf(card);
            newStack.splice(cardIndex, 1);
        }
    }
    function swap(firstCard, secondCard) {
        let firstIndex = newStack.indexOf(firstCard);
        let secondIndex = newStack.indexOf(secondCard);
        let removedCard = newStack.splice(firstIndex, 1);
        newStack.splice(secondIndex, 0, removedCard[0]);
    }

    for (let i = 0; i < tokens.length; i++) {
        const [comand, arg1, arg2] = tokens[i].split(" ");
        if (comand === "Ready") {
            console.log(newStack.join(" "));
        } else {
            switch (comand) {
                case "Add":
                    add(arg1);
                    break;
                case "Insert":
                    insert(arg1, arg2);
                    break;
                case "Remove":
                    remove(arg1);
                    break;
                case "Swap":
                    swap(arg1, arg2);
                    break;
                case "Shuffle":
                    newStack.reverse();
                    break;
            }
        }
    }
}
solve([
    "Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
    "Add Moonfire",
    "Add Pounce",
    "Add Bite",
    "Add Wrath",
    "Insert Claw 0",
    "Swap Claw Moonfire",
    "Remove Bite",
    "Shuffle deck",
    "Ready",
]);
// 100/100