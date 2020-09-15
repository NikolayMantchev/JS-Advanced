function solve(input) {
    let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
    let validNames = [];
    let validName = null;
    while ((validName = patern.exec(input)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(" "));
}
solve(
    "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, IvanIvanov"
);
//100/100
