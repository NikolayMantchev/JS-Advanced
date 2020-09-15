function cinemaTickets(input) {
    let filmName = input.shift();
    let ticketStudent = 0;
    let ticketKid = 0;
    let ticketStandart = 0;
    let totalTicketSold = 0;
    let isFinished = false;
    while (filmName !== "Finish") {
        let freeSits = Number(input.shift());
        let ticketSoldPerMovie = 0;
        let ticketType = input.shift();
        while (ticketType !== "End") {                // Stiga do finish!
            if (ticketType == 'Finish') {            // s flag go re6avam problema
                isFinished = true;
                break;
            } if (ticketType === "student") {
                ticketStudent++;
            } else if (ticketType === "standard") {
                ticketStandart++;
            } else {
                ticketKid++;
            }
            ticketSoldPerMovie++;
            totalTicketSold++;
            if (ticketSoldPerMovie >= freeSits) {
                break;
            }
            ticketType = input.shift();
        }
        console.log(`${filmName} - ${(ticketSoldPerMovie / freeSits * 100).toFixed(2)}% full.`);
        if (isFinished) {                             
            break;
        }
        filmName = input.shift();
    }
    console.log(`Total tickets: ${totalTicketSold}`);
    console.log(`${(ticketStudent / totalTicketSold * 100).toFixed(2)}% student tickets.`);
    console.log(`${(ticketStandart / totalTicketSold * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(ticketKid / totalTicketSold * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(
    [
        'Taxi', '10',
        'standard', 'kid',
        'student', 'student',
        'standard', 'standard',
        'End', 'Scary Movie',
        '6', 'student',
        'student', 'student',
        'student', 'student',
        'student', 'Finish'
    ]
);
