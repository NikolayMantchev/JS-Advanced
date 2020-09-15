function solve(input) {
    let playerName = input.shift();
    let gamesPlayed = Number(input.shift());

    let voleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;

    let voleyballPlayed = 0;
    let tenissPlayed = 0;
    let badmintonPlayed = 0;
    for (let i = 1; i <= gamesPlayed; i++) {
        let game = input.shift();
        let curentPoints = Number(input.shift());
        if (game === "volleyball") {
            voleyballPoints += curentPoints * 1.07;
            voleyballPlayed++;
        }
        if (game === "tennis") {
            tennisPoints += curentPoints * 1.05;
            tenissPlayed++;
        }
        if (game === "badminton") {
            badmintonPoints += curentPoints * 1.02;
            badmintonPlayed++;
        }
    }
    let averageVoleyball = Math.floor(voleyballPoints / voleyballPlayed);
    let averageTeniss = Math.floor(tennisPoints / tenissPlayed);
    let averageBadminton = Math.floor(badmintonPoints / badmintonPlayed);
    let totalPoints = Math.floor(voleyballPoints + tennisPoints + badmintonPoints);
    if (averageVoleyball >= 75 && averageTeniss >= 75 && averageBadminton >= 75) {
        console.log(`Congratulations, ${playerName}! You won the cruise games with ${Math.floor(totalPoints)} points.`)
    } else {
        console.log(`Sorry, ${playerName}, you lost. Your points are only ${Math.floor(totalPoints)}.`)
    }
}
solve(['Pepi', '3', 'volleyball', '78', 'tennis', '98', 'badminton', '105']);

//100/100