class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.screenings = [];
        this.profit = 0;
    }
    newScreening(date, hall, description) {
        // how to chck if array has properti of object !?
        const screeningCheck = this.screenings.find(
            (c) => c.date === date && c.hall === hall
        );

        if (screeningCheck) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        this.screenings.push({ date, hall });
        return `New screening of ${this.movieName} is added.`;
    }
    endScreening(date, hall, soldTickets) {}
    toString() {}
}
