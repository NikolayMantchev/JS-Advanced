function subtract() {
    const a = document.getElementById("firstNumber");
    const b = document.getElementById("secondNumber");
    const res = document.getElementById("result");
    const result = Number(a.value) - Number(b.value);
    console.log((res.innerHTML = result));
}
// 100/100
