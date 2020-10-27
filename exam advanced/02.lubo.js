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
            if (priority === "high") {
                this.tasks.unshift(newTask);
            } else {
                this.tasks.push(newTask);
            }
            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            if (this.tasks.length === 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;
            }
            return (this.tasks = this.tasks.slice(1));
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks() {
            const firstLine = "Tasks, that need to be completed:";
            const nextLines = this.tasks.map((t) => {
                return `${t.id}: ${t.taskName} - ${t.priority}`;
            });
            return [firstLine, ...nextLines].join("\n");
        }
    }
    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.bonus = bonus;
            this.experience = Number(experience);
            this.baseSalary = 1000 + Number(bonus);
        }

        learn(years) {
            this.experience += Number(years);
        }
    }
    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.bonus = bonus;
            this.baseSalary = 1000 + Number(bonus);
            console.log(this.baseSalary);
            this.experience = Number(experience) + 5;
        }

        changeTaskPriority(taskId) {
            const task = this.tasks.find((t) => t.id === taskId);

            if (!task) return;

            const newTask =
                task.priority === "high"
                    ? { ...task, priority: "low" }
                    : { ...task, priority: "high" };

            const theRest = this.tasks.filter((t) => t.id !== taskId);
            this.tasks =
                newTask.priority === "high"
                    ? [newTask, ...theRest]
                    : [...theRest, newTask];

            return newTask;
        }
    }

    return {
        Developer,
        Junior,
        Senior,
    };
}

// 70/100

const classes = solveClasses();

const developer = new classes.Senior("George", "Joestar", 500, 2);

console.log(developer.addTask(1, "Inspect bug", "low"));
