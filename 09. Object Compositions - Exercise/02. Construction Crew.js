function solve(input) {
    let { weight, experience, levelOfHydrated, dizziness } = input;
    if (dizziness) {
        levelOfHydrated += weight * 0.1 * experience;
        return console.log({
            weight,
            experience,
            levelOfHydrated,
            dizziness: false,
        });
    }
}

solve({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true,
});
