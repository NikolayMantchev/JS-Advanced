function solve(word, text) {
    old = "";
    while (text !== old) {
        old = text;
        text = text.replace(word, "");
    }
    console.log(text);
}
solve(
    "ice",

    "kicegiciceeb"
);
