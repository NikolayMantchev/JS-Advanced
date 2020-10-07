function solve() {
    let input = document.getElementsByTagName("input")[0];
    let buton = document.getElementsByTagName("button")[0];
    let database = {};
    let index = 0;
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode([i]);
        database[letter] = index++;
    }
    buton.addEventListener("click", arr());
    let array = document.getElementsByTagName("li");

    function arr() {}
}
// not finished
