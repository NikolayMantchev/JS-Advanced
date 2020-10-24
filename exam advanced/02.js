function solveClasses() {
    class First {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }
        hallEvent(title) {
            if (this.events.includes(title)) {
                throw new Error("This event is already added!");
            }
            this.events.push(title);
            return "Event is added.";
        }
        close() {
            this.events = [];
            console.log(`${this.name} hall is closed.`);
        }
        toString() {
            if (this.events.length > 0) {
                return `Events: ${this.events.join(", ")}`;
            }
            return `${this.name} hall - ${this.capacity}`;
        }
    }
    class Second extends First {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;
            this.events = [];
        }
        close() {
            return `${super.close()} Аll screenings are over.`;
        }
        toString() {
            return `${super.toString()}\n${this.name} is a movie theater with ${
                this.screenSize
            } screensize and ${this.capacity} seats capacity.`;
        }
    }
    class Third extends First {
        constructor(capacity, name) {
            super(capacity, name);
            this.events = [];
        }
        hallEvents(title, performers) {
            super.hallEvent();
            if (this.events.includes(title)) {
                throw new Error("This event is already added!");
            }
            this.events.push(title.performers);
            return "Event is added.";
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`;
        }
        toString() {
            `${this.name} hall - ${this.capacity}`;

            if (this.events.length > 0) {
                `Events: ${this.events.join(", ")}`;
            }
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall,
    };
}
