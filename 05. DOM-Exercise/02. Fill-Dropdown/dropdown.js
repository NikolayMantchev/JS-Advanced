function addItem() {
    const newText = document.getElementById("newItemText");
    const newValue = document.getElementById("newItemValue");
    const menu = document.getElementById("menu");
    const option = document.createElement("option");
    option.textContent = newText.value + newValue.value;
    res = menu.appendChild(option);
    console.log(res);
    newText.value = "";
    newValue.value = "";
}
