function encodeAndDecodeMessages() {
    const input = document.querySelectorAll("textarea")[0];
    const encodeBtn = document.querySelectorAll("button")[0];
    const output = document.querySelectorAll("textarea")[1];
    const decodeBtn = document.querySelectorAll("button")[1];
    encodeBtn.addEventListener("click", () => {
        let encodetInput = [];
        for (let i = 0; i < input.value.length; i++) {
            encodetInput.push(input.value.charCodeAt(i) + 1);
        }
        output.style.display = "enabled";
        output.value = encodetInput.join(" ");
        input.value = "";
    });
    decodeBtn.addEventListener("click", () => {
        let decodetOutput = "";
        let char = output.value;
        let res = "";
        for (let i = 0; i <= char.length; i++) {
            if (char[i] !== " " && char[i] !== undefined) {
                decodetOutput += char[i];
            } else {
                res += String.fromCharCode(decodetOutput - 1);
                decodetOutput = "";
            }
        }
        output.value = res;
    });
}
// 50/100
// but working
