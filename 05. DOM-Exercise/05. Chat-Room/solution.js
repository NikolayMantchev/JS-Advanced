// function solve() {
//     let btn = document.getElementById("send");
//     let input = document.getElementById("chat_input");

//     btn.addEventListener("click", () => {
//         let mesages = document.getElementById("chat_messages");
//         let newDiv = document.createElement("div");
//         newDiv.innerHTML = input.value;
//         mesages.appendChild(newDiv);
//         input.value = "";
//     });
// }

// 80/100

function solve() {
    let s = document.getElementById("send");
    s.addEventListener("click", () => {
        const input = document.getElementById("chat_input");
        document
            .getElementById("chat_messages")
            .insertAdjacentHTML(
                "beforeend",
                '<div class="message my-message">' + input.value + "</div>"
            );

        input.value = "";
    });
}
// 100/100
