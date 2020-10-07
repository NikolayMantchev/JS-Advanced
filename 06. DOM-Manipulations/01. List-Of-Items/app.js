function addItem() {
    const text = document.getElementById("newItemText");
    let newText = document.createElement("li");
    newText.innerHTML = text.value;
    let items = document.getElementById("items");
    items.appendChild(newText);
    text.value = "";
}
