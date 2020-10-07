function solve() {
    let searched = document.getElementById("searchField");

    document.getElementById("searchBtn").addEventListener("click", () => {
        [...document.querySelectorAll("tbody > tr")].forEach((row) => {
            if (row.textContent.includes(searched.value)) {
                row.className = "select";
            }
        });
        searched.value = "";
    });
}
// 100/100
