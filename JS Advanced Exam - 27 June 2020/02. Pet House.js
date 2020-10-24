function solveClasses() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }

        addComment(comment) {
            if (this.comments.includes(comment)) {
                throw new Error("This comment is already added!");
            }

            this.comments.push(comment);
            return "Comment is added.";
        }

        feed() {
            return `${this.name} is fed`;
        }

        toString() {
            console.log(`Here is ${this.owner}'s pet ${this.name}.`);

            if (this.comments.length > 0) {
                const commentsText = this.comments.join(", ");

                console.log(`Special requirements: ${commentsText}`);
            }
        }
    }

    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);

            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }

        feed() {
            return `${super.feed()}, happy and purring.`;
        }

        toString() {
            super.toString();
            console.log("Main information:");

            const scratchingText = this.scratching
                ? ", but beware of scratches."
                : "";

            console.log(
                `${this.name} is a cat with ${this.insideHabits}${scratchingText}`
            );
        }
    }

    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);

            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }

        feed() {
            return `${super.feed()}, happy and wagging tail.`;
        }

        toString() {
            super.toString();
            console.log("Main information:");

            console.log(
                `${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`
            );
        }
    }

    return {
        Pet,
        Cat,
        Dog,
    };
}

// 88/100
let classes = solveClasses();

let cat = new classes.Cat("Jim", "Sherry", "very good habits", true);

console.log(cat.addComment("likes to be brushed"));

console.log(cat.addComment("sleeps a lot"));

console.log(cat.feed());

console.log(cat.toString());
