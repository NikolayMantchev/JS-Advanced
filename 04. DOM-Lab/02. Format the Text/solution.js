function solve() {
    const input = document.getElementById("input");
    const sentences = input.innerHTML.split(".");

    let output = document.getElementById("output");
    let newParagraph;
    while (sentences.length - 1 > 0) {
        let p = document.createElement("p");
        for (let i = 0; i < 3; i++) {
            const element = sentences.shift();
            p.innerHTML += " " + element + ".";
        }
        output.appendChild(p);
    }
    return output;
}
// 100/100
