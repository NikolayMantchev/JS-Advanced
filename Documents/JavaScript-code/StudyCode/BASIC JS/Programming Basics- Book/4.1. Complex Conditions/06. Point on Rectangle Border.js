function rectangle([a, b, c, d, e, f,]) {
    let x1 = Number(a);
    let y1 = Number(b);
    let x2 = Number(c);
    let y2 = Number(d);
    let x = Number(e);
    let y = Number(f);
    let xVertical = (((x1 <= x) && (x <= x2)) && (y === y1 || y === y2));
    let yUpright = (((y1 <= y) && (y <= y2)) && (x === x1 || x === x2));
    if (xVertical || yUpright) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}
rectangle ([2, -3, 12, 3, 8, -1]);