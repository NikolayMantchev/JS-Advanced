function solve(input) {
    let capacity = Number(input.shift());
    let people = input.shift();
    let income = 0;
    let peopleInSalon = 0;
    while (people !== "Movie time!") {
        curentPeople = Number(people);
        peopleInSalon += curentPeople;     // check if cinema is full
        if (capacity < peopleInSalon) {
            console.log("The cinema is full.")
            break;
        }
        if (curentPeople % 3 === 0) {
            income += (curentPeople * 5) - 5;
        } else {
            income += (curentPeople * 5);
        }
        people = input.shift();
    }
    if (people === "Movie time!") {
        console.log(`There are ${capacity - peopleInSalon} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${income} lv.`)
}
solve(['100', '15', '15', '15', '15', '15', '15', '15']);