function solve(text, word) {
    let censored = text.replace(word, repeat(word));
    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word));
    }
    function repeat(arg) {
        let changedWord = "";
        for (let ch of arg) {
            ch = "*";
            changedWord += ch;
        }
        return changedWord;
	}
	console.log(censored);
}
solve("A small sentence with some words", "small");
