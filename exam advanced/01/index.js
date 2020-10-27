function solve() {
    const name = document.querySelector("form input");
    const date = document.querySelector("form input");
    const modul = document.querySelectorAll("select option");
    const addBtn = document.querySelector("button");
    const trainings = document.querySelector("sections div");
    function lecture(e) {
        e.preventDefault();
        console.log(modul);
        // const curModul = modul.find((x) => x.value);
        // if (name.value && date.value && curModul) {
        // }
        const div = document.createElement("div");
        div.className = "module";
        const h3 = document.createElement("h3");
        h3.innerHTML = modul;

        //    ul/li/h4/GamepadButton
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = `${name.value} - ${date.value}`;
        const delBtn = document.createElement("button");
        delBtn.className = "red";
        delBtn.innerText = "Del";

        li.appendChild(h4);
        li.appendChild(delBtn);
        ul.appendChild(li);
        div.appendChild(h3);
        div.appendChild(ul);

        trainings.appendChild.div;
    }
    addBtn.addEventListener("click", lecture);
}
