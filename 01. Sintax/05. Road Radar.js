function solve(param) {
    const [speed, area] = param;
    function kmhAlowed(area) {
        let maxSpeedAlowed = speed;
        switch (area) {
            case "motorway":
                maxSpeedAlowed = 130;
                break;
            case "interstate":
                maxSpeedAlowed = 90;
                break;
            case "city":
                maxSpeedAlowed = 50;
                break;
            case "residential":
                maxSpeedAlowed = 20;
                break;
            default:
                maxSpeedAlowed;
                break;
        }
        return maxSpeedAlowed;
    }
    let limit = speed - kmhAlowed(area);
    if (limit <= 20 && limit > 0) {
        console.log("speeding");
    }
    if (limit > 20 && limit <= 40) {
        console.log("excessive speeding");
    }
    if (limit > 40) {
        console.log("reckless driving");
    }
}
solve([40, "city"]);
solve([21, "residential"]);
solve([120, "interstate"]);
solve([200, "motorway"]);
