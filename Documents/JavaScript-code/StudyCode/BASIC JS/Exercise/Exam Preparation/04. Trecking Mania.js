function solve(input) {
    let groupCount = Number(input.shift());
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;
    for (let i = 1; i <= groupCount; i++) {
        let people = Number(input.shift());
        totalPeople += people
        if (people <= 5) {
            musala += people;
        } else if (people > 5 && people <= 12) {
            monblan += people;
        } else if (people > 12 && people <= 25) {
            kilimandjaro += people;
        } else if (people > 25 && people <= 40) {
            k2 += people;
        } else if (people > 40) {
            everest += people;
        }
    }
    let musalaPercent = (musala / totalPeople) * 100;
    let monblanPercent = (monblan / totalPeople) * 100;
    let kilimandjaroPercent = (kilimandjaro / totalPeople) * 100;
    let k2Percent = (k2 / totalPeople) * 100;
    let everestPercent = (everest / totalPeople) * 100;
    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}
solve([
    '10', '10', '5',
    '1', '100', '12',
    '26', '17', '37',
    '40', '78'
])

// 100/100