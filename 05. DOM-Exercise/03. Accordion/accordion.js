function toggle() {
    const buton = document.getElementsByClassName("button")[0];

    const text = document.getElementById("extra");
    if (text.style.display === "none") {
        text.style.display = "block";
        buton.innerHTML = "Less";
    } else {
        text.style.display = "none";
        buton.innerHTML = "More";
    }
}
