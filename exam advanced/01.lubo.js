function solve() {
    const lectureInput = document.querySelector("input[name='lecture-name']");
    const dateInput = document.querySelector("input[name='lecture-date']");
    const moduleSelect = document.querySelector(
        "select[name='lecture-module']"
    );
    const addButton = document.querySelector("div.form-control button");
    const trainingDiv = document.querySelector("div.modules");

    const state = {};

    addButton.addEventListener("click", (e) => {
        e.preventDefault();

        const date = dateInput.value.replaceAll("-", "/").replace("T", " - ");
        const lecture = lectureInput.value;
        const module = moduleSelect.value;

        if (date === "" || lecture === "" || module === "Select module") {
            return;
        }

        const lectures = state[module];
        const newLectures = lectures
            ? [...lectures, { date, lecture }]
            : [{ date, lecture }];

        state[module] = newLectures;

        renderTrainings();
    });

    const handleDelete = (module, index) => (e) => {
        e.preventDefault();

        const lectures = state[module];
        lectures.splice(index, 1);

        if (lectures.length === 0) {
            delete state[module];
        }

        renderTrainings();
    };
    const renderTrainings = () => {
        const moduleDivs = Object.keys(state).map((module) => {
            const moduleElm = document.createElement("h3");
            moduleElm.textContent = module;

            const lectureList = state[module]
                .sort((a, b) => a.date.localeCompare(b.date))
                .map((l, index) => {
                    const lectureH4 = document.createElement("h4");
                    lectureH4.textContent = `${l.lecture} - ${l.date}`;

                    const delButton = document.createElement("button");
                    delButton.textContent = "Del";
                    delButton.className = "red";
                    delButton.addEventListener(
                        "click",
                        handleDelete(module, index)
                    );

                    const liElm = document.createElement("li");
                    liElm.appendChild(lectureH4);
                    liElm.appendChild(delButton);
                    liElm.className = "flex";

                    return liElm;
                });

            const lectureUlElm = document.createElement("ul");
            lectureList.forEach((li) => lectureUlElm.appendChild(li));

            const moduleDiv = document.createElement("div");
            moduleDiv.appendChild(moduleElm);
            moduleDiv.appendChild(lectureUlElm);
            moduleDiv.className = "module";

            return moduleDiv;
        });
    };
}
