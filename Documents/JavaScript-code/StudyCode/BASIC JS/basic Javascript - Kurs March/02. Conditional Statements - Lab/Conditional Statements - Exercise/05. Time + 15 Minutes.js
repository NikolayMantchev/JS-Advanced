function solve(hour, minutes) {
    hour = Number(hour);
    minutes = Number(minutes);
    let totalMinutes = hour * 60 + minutes + 15;
    let hourToPrint = Math.floor(totalMinutes / 60)
    let minToPrint = (totalMinutes % 60)

    if (hourToPrint > 23) {
        hourToPrint = 0;
    }
    if (minToPrint < 9) {
        console.log(`${hourToPrint}:0${minToPrint}`)
    } else {
        console.log(`${hourToPrint}:${minToPrint}`)
    }
}
solve(0, 01);
// 100/100

/*    Да се напише програма, която чете час и минути от 24-часово денонощие, 
въведени от потребителя и изчислява колко ще е часът след 15 минути. 
Резултатът да се отпечата във формат часове:минути. 
Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. 
Часовете се изписват с една или две цифри. Минутите се изписват винаги с по 
две цифри, с водеща нула, когато е необходимо */