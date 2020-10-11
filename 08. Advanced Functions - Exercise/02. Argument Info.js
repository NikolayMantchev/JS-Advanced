function solve() {
    const counter = {};
    [...arguments].forEach((x) => {
        let result = "";
        typeof x === "function"
            ? (result = `${typeof x}: ${x.toString()}`)
            : (result = `${typeof x}: ${x}`);
        console.log(result);
        if (!counter[typeof x]) {
            counter[typeof x] = {
                count: 0,
            };
        }
        counter[typeof x].count += 1;
    });
    const sortedCounter = Object.keys(counter).sort(
        (a, b) => counter[b].count - counter[a].count
    );

    sortedCounter.forEach((x) => console.log(`${x} = ${counter[x].count}`));
}
solve("cat", 42, function () {
    console.log("Hello world!");
});
