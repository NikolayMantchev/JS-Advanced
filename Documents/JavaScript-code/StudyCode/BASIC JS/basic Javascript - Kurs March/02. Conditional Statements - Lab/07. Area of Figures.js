function solve (arg1, arg2, arg3){
    let figure = arg1;
    let lenght = Number (arg2);
    let higth = Number (arg3);
    if (figure === "square") {
        console.log((lenght * lenght).toFixed(3))
    } else if (figure === "rectangle") {
        console.log((lenght * higth).toFixed(3))
    } else if (figure === "triangle") {
        console.log(((lenght * higth)/2).toFixed(3))
    } else if (figure === "circle") {
        console.log (Math.PI * (lenght * lenght).toFixed(3));
    }

}
solve("circle", 6);