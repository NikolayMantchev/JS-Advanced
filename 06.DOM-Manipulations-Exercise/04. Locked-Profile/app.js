function lockedProfile() {
    Array.from(document.getElementsByClassName("profile")).forEach((parent) => {
        const btn = parent.querySelectorAll("button")[0];
        btn.addEventListener("click", () => {
            const unlock = parent.querySelectorAll("input")[1].checked;
            const hidenDiv = parent.querySelectorAll("div")[0];
            if (unlock) {
                if (btn.textContent == "Show more") {
                    hidenDiv.style.display = "block";
                    btn.textContent = "Hide it";
                } else if (btn.textContent == "Hide it") {
                    hidenDiv.style.display = "none";
                    btn.textContent = "Show more";
                }
            }
        });
    });
}
// 100/100
