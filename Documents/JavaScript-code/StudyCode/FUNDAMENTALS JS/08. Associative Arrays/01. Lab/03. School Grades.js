function solve(input) {
    let studentGrades = new Map();
    input.forEach((element) => {
        let [name, ...gradesText] = element.split(" ");
        let grades = gradesText.map(Number);
        if (!studentGrades.has(name)) {
			studentGrades.set(name, grades);
			
        } else {
            studentGrades.set(name, studentGrades.get(name).concat(grades));
        }
    });
    // nedovarshena
}
solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
// 0/100