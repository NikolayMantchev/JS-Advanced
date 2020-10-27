function solve() {
    // Take elements
    const inputElements = Array.from(document.querySelectorAll("#name input"));
    // css selectors id -> ('#id')
    // css selectors id + element -> ('#id input')
    //  item(1)
    const [nameEl, ageEL, kindEl, curOwnerEl] = inputElements;
    const addButton = document.querySelector("#container button");
    const secondSection = document.querySelector("#adoption ul");
    const thirdSection = document.querySelector("#adopted ul");

    addButton.addEventListener("click", second);

    function second(e) {
        e.preventDefault();

        //  check if inputs are valid
        if (!inputElements.every((x) => x.value)) {
            return;
        }
        if (!Number(ageEL.value)) {
            return;
        }
        // create Elements   -  listItem/p/span/button
        const listItem = document.createElement("li");
        const pItem = document.createElement("p");
        pItem.innerHTML = `<strong>${nameEl.value}</strong> is a <strong>${ageEL.value}</strong> year old <strong>${kindEl.value}</strong>`;
        const span = document.createElement("span");
        span.innerText = `Owner: ${curOwnerEl.value}`;
        const contactButton = document.createElement("button");
        contactButton.textContent = `Contact with owner`;

        listItem.appendChild(pItem);
        listItem.appendChild(span);
        listItem.appendChild(contactButton);
        // append to the secondSection
        secondSection.appendChild(listItem);
        // clear input fields
        nameEl.value = "";
        ageEL.value = "";
        kindEl.value = "";
        curOwnerEl.value = "";
        contactButton.addEventListener("click", third);
    }

    function third(e) {
        // create elements div/input: placeholder/ span/button
        const parent = e.currentTarget.parentElement;
        e.currentTarget.remove();

        const div = document.createElement("div");
        const inputOwner = document.createElement("input");
        inputOwner.placeholder = "Enter your names";
        const span = document.createElement("span");
        span.innerHTML = `Owner: ${inputOwner.value}`;
        const takeItBtn = document.createElement("button");
        takeItBtn.textContent = "Yes! I take it!";

        div.appendChild(inputOwner);
        div.appendChild(takeItBtn);
        parent.appendChild(div);

        takeItBtn.addEventListener("click", adopt);
    }

    function adopt(e) {
        const input = e.currentTarget.parentElement;
        const newParent = input.parentElement;
        const adoptPerson = newParent.querySelector("input");

        if (!adoptPerson.value) {
            return;
        }
        const span = newParent.querySelector("span");
        span.innerText = `New Owner: ${adoptPerson.value}`;
        const contactButton = document.createElement("button");
        contactButton.textContent = `Checked`;

        newParent.appendChild(contactButton);

        e.currentTarget.parentElement.remove();
        thirdSection.appendChild(newParent);

        contactButton.addEventListener("click", (e) => {
            e.currentTarget.parentElement.remove();
        });
    }
}
