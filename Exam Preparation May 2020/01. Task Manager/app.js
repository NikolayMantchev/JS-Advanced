function solve() {
    const inputTasc = document.getElementById("task");
    const inputDesc = document.getElementById("description");
    const inputDate = document.getElementById("date");
    const addButn = document.getElementById("add");

    const sections = document.querySelectorAll("section");
    const openDiv = sections.item(1).querySelectorAll("div").item(1);
    const progresDiv = document.getElementById("in-progress");
    const finishedDiv = sections.item(3).querySelectorAll("div").item(1);

    addButn.addEventListener("click", addTask);

    function addTask(e) {
        //
        e.preventDefault();
        // прочитам съдържанието и валидираме
        const taskName = inputTasc.value.trim();
        const descName = inputDesc.value.trim();
        const date = inputDate.value.trim();

        if (taskName.length > 0 && descName.length > 0 && date.length > 0) {
            // създавам бутоните
            const startBtn = el("button", "Start", { className: "green" });
            const finishBtn = el("button", "Finish", { className: "orange" });
            const deleteBtn = el("button", "Delete", { className: "red" });
            // създавам див с бутони
            const btnDiv = el("div", [startBtn, deleteBtn], {
                className: "flex",
            });
            //  създавам артикула и му добавям бутоните
            const task = el("article", [
                el("h3", taskName),
                el("p", `Description: ${descName}`),
                el("p", `Due Date: ${date}`),
                btnDiv,
            ]);
            // закачам фунциалността
            startBtn.addEventListener("click", () => {
                progresDiv.appendChild(task);
                startBtn.remove();
                btnDiv.appendChild(finishBtn);
            });
            deleteBtn.addEventListener("click", () => {
                task.remove();
            });
            finishBtn.addEventListener("click", () => {
                finishedDiv.appendChild(task);
                btnDiv.remove();
            });
            // добавям елемента в ДОМ дървото
            openDiv.appendChild(task);

            inputTasc.value = "";
            inputDesc.value = "";
            inputDate.value = "";
        }
    }

    function el(type, content, atributes) {
        const result = document.createElement(type);
        if (atributes !== undefined) {
            Object.assign(result, atributes);
        }
        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }
        function append(node) {
            if (typeof node === "string") {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }
        return result;
    }
}
// 100/100
