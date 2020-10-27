function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.tasks = [];
            this.experience = 0;
            this.baseSalary = 1000;
        }
        addTask(id, taskName, priority) {
            const newTask = { id, taskName, priority };
            if (priority == "high") {
                this.tasks.unshift(newTask);
            } else {
                this.tasks.push(newTask);
            }
            return `Task id ${id}, with ${priority} priority, has been added.`;
        }
        doTask() {
            if (this.tasks.length == 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;
            }
            return (this.tasks = this.tasks.slice(1));
        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }
        reviewTasks() {
            const firstLine = `Tasks, that need to be completed:`;
            const nextLines = this.tasks.forEach((t) => {
                console.log(`${t.id}: ${t.taskName} - ${t.priority}\n`);
            });

            // return print
            //
            return `${firstLine}\n`;
        }
    }
    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.bonus = bonus;
            this.experience = experience;
            this.baseSalary = 1000 + bonus;
        }
        learn(years) {
            return (this.experience += years);
        }
    }
    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.bonus = bonus;
            this.experience = experience;
            this.baseSalary = 1000 + bonus;
            this.experience = experiense + 5;
        }
        changeTaskPriority(taskId) {
            // to do..
            /*This method should first change the task's priority 
			("high" becomes "low" / "low" becomes "high") and then the 
			task should be moved on the first place of the tasks array 
			if the priority is high, and on the last place if the priority 
			is low.  At the end the method should return the task. */
        }
    }

    return {
        Developer,
        Junior,
        Senior,
    };
}

// 70/100

let classes = solveClasses();

const developer = new classes.Developer("George", "Joestar");

console.log(developer.addTask(1, "Inspect bug", "low"));

console.log(developer.addTask(2, "Update repository", "high"));

console.log(developer.reviewTasks());

console.log(developer.getSalary());
