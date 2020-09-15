function inputSpeed ([number]){
    let speed = parseFloat(number);
    if (speed <= 10) {
        console.log("slow");
    } else if (speed < 50){
        console.log("average");
    } else if (speed < 150){
        console.log("fast");
    } else if (speed < 1000){
        console.log("ultra fast");
    } else if (speed > 1001){
        console.log("extremely fast");
    }
}
inputSpeed (["3500"]);

// Result 84/100