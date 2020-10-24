function solve() {
    // Take elements
    const inputElements = Array.from(
        document.querySelectorAll("#container input")
    ); // css selectors id -> ('#id')
    // css selectors id + element -> ('#id input')
    //  item(1)
    const [nameEl, hallEL, ticketPrice] = inputElements;
    const addButton = document.querySelector("#container button");
    const movies = document.querySelector("#movies ul");
    const archive = document.querySelector("#archive ul");
    const clearBtn = document.querySelector("#archive button");

    addButton.addEventListener("click", second);

    function second(e) {
        e.preventDefault();

        //  check if inputs are valid
        if (!inputElements.every((x) => x.value)) {
            return;
        }
        if (!Number(ticketPrice.value)) {
            return;
        }
        const fixPrice = Number(ticketPrice.value);

        // create listItem/p/span/button
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = `${nameEl.value}`;
        const strong = document.createElement("strong");
        strong.innerHTML = `Hall: ${hallEL.value}`;

        const div = document.createElement("div");
        const strongInput = document.createElement("strong");
        strongInput.innerText = `${fixPrice.toFixed(2)}`;
        // strongInput.innerHTML.toFixed(2);
        const input = document.createElement("input");
        input.placeholder = "Tickets Sold";
        const archiveBtn = document.createElement("button");
        archiveBtn.textContent = `Archive`;

        listItem.appendChild(span);
        listItem.appendChild(strong);
        div.appendChild(strongInput);
        div.appendChild(input);
        div.appendChild(archiveBtn);
        listItem.appendChild(div);

        // append to the secondSection
        movies.appendChild(listItem);
        // clear input fields
        nameEl.value = "";
        hallEL.value = "";
        ticketPrice.value = "";

        archiveBtn.addEventListener("click", third);
    }

    function third(e) {
        // create new div/input: placeholder/ span/button
        const bought = e.currentTarget.parentElement.querySelector("input");
        const price = e.currentTarget.parentElement.querySelector("strong");
        if (!Number(bought.value)) {
            return;
        }
        e.currentTarget.parentElement.parentElement.remove();
        if (!Number(bought.value) && bought.value) {
            return;
        }
        Number(price.innerText).toFixed(2);
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = `${nameEl.value}`;
        const boughtTickets = Number(price.innerText) * Number(bought.value);
        const strong = document.createElement("strong");
        strong.innerHTML = `Total Amount: ${boughtTickets.toFixed(2)}`;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(delBtn);
        archive.appendChild(li);

        delBtn.addEventListener("click", clear);
    }

    function clear(e) {
        curInput = e.currentTarget.parentElement;
        console.log(curInput);
        if (curInput !== "" && !Number(curInput.value)) {
            const clear = e.currentTarget.parentElement.remove();
        }
    }
    clearBtn.addEventListener("click", (e) => {
        const toClear = document.querySelectorAll("#archive li");
        Array.from(toClear);
        toClear.forEach((li) => li.remove());
    });
}
// 75/100
