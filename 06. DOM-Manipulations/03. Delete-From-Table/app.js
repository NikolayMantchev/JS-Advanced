function deleteByEmail() {
    const input = document.querySelector("input");
    const td = document.getElementsByTagName("td");
    const result = document.getElementById("result");

    for (let i = 0; i < td.length; i++) {
        if (td[i].textContent === input.value) {
            let parent = td[i].parentElement;
            parent.parentNode.removeChild(parent);
            result.textContent = "Deleted.";
            break;
        }
        result.textContent = "Not found.";
    }
}
