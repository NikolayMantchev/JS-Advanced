function solve(param) {
    param.sort((a, b) => {
        if (b.length !== a.length) {
            return a.length - b.length;
        }
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
    });
    console.log(param.join("\n"));
}

solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
