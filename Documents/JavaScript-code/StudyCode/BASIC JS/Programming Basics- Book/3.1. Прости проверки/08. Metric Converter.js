function convertMetricks ([arg1, first, second,]){
    let size = parseFloat(arg1);
    let input = first.toLowerCase();
    let output = second.toLowerCase();
    if (input === "km"){
        size = size / 0.001;
    } else if (input === "mm"){
        size = size / 1000;
    } else if (input === "cm"){
        size = size / 100;
    } else if (input === "mi"){
        size = size / 0.000621371192;
    } else if (input === "in") {
        size = size / 39.3700787;
    }else if (input === "ft") {
        size = size / 3.2808399;
    } else if (input === "yd") {
        size = size / 1.0936133;
    } else if (size === "m"){
        size = size / 1;
    }
    if (output === "km") {
        size = size * 0.001;
    } else if (output === "mm") {
        size = size * 1000;
    } else if (output === "cm") {
        size = size * 100;
    } else if (output === "mi") {
        size = size * 0.000621371192;
    } else if (output === "in") {
        size = size * 39.3700787;
    } else if (output === "ft") {
        size = size * 3.2808399;
    } else if (output === "yd") {
        size = size * 1.0936133;
    }  else if (size === "m"){
        size = size * 1;
    }
    console.log (size+" " +output);
}
convertMetricks ([450, 'yd', 'km',]);