function solve() {
    const num = document.getElementById("input");
    const connvertTo = document.getElementById("selectMenuTo");

    const option1 = document.createElement("option");
    option1.innerHTML = "binary";
    connvertTo.appendChild(option1);
    const option2 = document.createElement("option");
    option2.innerHTML = "hexadecimal";
    connvertTo.appendChild(option2);

    const btn = document.getElementsByTagName("button")[0];
    btn.addEventListener("click", () => {
        let result = document.getElementById("result");
        // logic or math !?
        if (connvertTo[1].value === option1.innerHTML) {
            result.value = (num.value >>> 0).toString(2);
        } else {
            result.value = num.value.toString(16);
        }
    });
}
// 0/100
