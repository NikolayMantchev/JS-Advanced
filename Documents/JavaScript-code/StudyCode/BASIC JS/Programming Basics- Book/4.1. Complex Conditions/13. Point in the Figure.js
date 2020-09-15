function point([arg1, arg2, arg3]) {
    let h = Number(arg1);
    let x = Number(arg2);
    let y = Number(arg3);
    let inRectangle1 = (x > 0 && x < 3 * h) && (y > 0 && y < h);
    let inRectangle2 = (x > h && x < 2 * h) && (y > h && y < 4 * h);
    let outRectangle1 = (x > 3 * h || x < 0) || (y > h || y < 0);
    let outRectangle2 = (y < h || y > 3 * h) || (x < h || x > 2 * h);
    let commonBorder = (x > h && x < 2 * h && y === h);
    if (outRectangle1 && outRectangle2) {
        console.log('outside');
    } else if (inRectangle1 || inRectangle2 || commonBorder) {
        console.log('inside');
    } else {
        console.log('border');
    }
}

point ([15, 30, 0])

// Result Judge 91/100