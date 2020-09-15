function solve(input) {
    let obj = getWantedWords(input);

    function getWantedWords(arr) {
        let obj = {};
        arr[0].split(" ").forEach((word) => {
            obj[word] = 0;
        });
        return obj;
    }
    input.slice(1).forEach((word) => {
        if (Object.keys(obj).includes(word)) {
            obj[word]++;
        }
    });
    Object.keys(obj)
        .sort((a, b) => obj[b] - obj[a])
        .forEach((key) => {
            console.log(`${key} - ${obj[key]}`);
        });
}

solve([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurances",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
// 100/100