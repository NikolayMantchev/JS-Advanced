function solve(param) {
    const arr = [];
    let addetNum = (x) => x + 1;
    numToPush = 0;
    param.forEach((comand) => {
        numToPush++;
        switch (comand) {
            case "add":
                arr.push(numToPush);
                break;
            case "remove":
                arr.pop();
                break;

            default:
                break;
        }
    });
    if (arr.length < 1) {
        return console.log("Empty");
    }
    console.log(arr.join("\n"));
}

solve(["add", "add", "remove", "add", "add"]);
