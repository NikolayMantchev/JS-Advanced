function attachEventsListeners() {
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    function convert(sec) {
        const day = sec / (24 * 60 * 60);
        const hour = sec / (60 * 60);
        const minute = sec / 60;
        const second = sec;

        daysInput.value = day;
        hoursInput.value = hour;
        minutesInput.value = minute;
        secondsInput.value = second;
    }

    document.getElementById("daysBtn").addEventListener("click", () => {
        convert(+daysInput.value * 86400);
    });
    document.getElementById("hoursBtn").addEventListener("click", () => {
        convert(+hoursInput.value * 3600);
    });
    document.getElementById("minutesBtn").addEventListener("click", () => {
        convert(+minutesInput.value * 60);
    });
    document.getElementById("secondsBtn").addEventListener("click", () => {
        convert(+secondsInput.value);
    });
}
