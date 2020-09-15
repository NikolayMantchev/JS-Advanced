function solve(arg1, arg2, arg3) {
    let bees = Number(arg1);
    let bearHealt = Number(arg2);
    let bearAtack = Number(arg3);
    let beesLeft = bees;


    while (beesLeft >= 100) {

        beesLeft -= bearAtack;
        bearHealt = bearHealt - (beesLeft * 5);


        if (beesLeft < 0) {
            console.log(`The bear stole the honey! Bees left ${0}.`);
            break;
        }
        if (beesLeft <= 100) {

            console.log(`The bear stole the honey! Bees left ${beesLeft}.`);
            break;
        } else if (bearHealt < 0) {
            console.log(`Beehive won! Bees left ${beesLeft}.`)
            break;
        }
    }
}

solve(200, 10000, 300);