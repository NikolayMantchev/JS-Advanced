function solve(input) {
    const employees = {};
    input.forEach(name => {
        employees[name] = name.length;
    });
    for (const name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)

    // "Name: {employeeName} -- Personal Number: {personalNum}" 