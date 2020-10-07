function solve() {
    const button = document.getElementById("dropdown");
    const drop = document.getElementById("dropdown-ul");
    let box = document.getElementById("box");
    let dropBox = document.getElementsByTagName("li");

    button.addEventListener("click", () => {
        drop.style.display = "block";
        [...dropBox].forEach((el) => {
            el.addEventListener("click", () => {
                box.style.backgroundColor = el.innerHTML;
            });
        });
        button.addEventListener("click", () => {
            drop.style.display = "none";
        });
        box.addEventListener("click", () => {
            box.style.backgroundColor = "";
        });
    });
}
// 60 / 100;
