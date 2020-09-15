function figure([arg1, arg2,arg3]){
    let figureType = (arg1);
    let lenght1 = parseFloat(arg2);
    let lenght2 = parseFloat(arg3);
    let square = 0;
    let rectangle = 0;
    let circle = 0;
    let triangle = 0;

    if (figureType === "square") {
        square = lenght1 * lenght1;
        console.log (square.toFixed(3));
    }
    if (figureType === "rectangle") {
        rectangle = lenght1 * lenght2;
        console.log (rectangle.toFixed(3));
    }
    if (figureType === "circle") {
        circle = Math.PI * (lenght1 * lenght1);
        console.log (circle.toFixed(3));
    }
    if (figureType === "triangle") {
        triangle = (lenght1 * lenght2)/2;
        console.log (triangle.toFixed(3));
    }

}
figure (["circle", 6,]);

