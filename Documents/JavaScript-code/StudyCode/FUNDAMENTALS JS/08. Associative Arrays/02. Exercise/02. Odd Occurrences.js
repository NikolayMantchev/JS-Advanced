function solve(input) {
    let elements = input.split(" ").map((x) => x.toLowerCase());
    let map = generateMap(new Set(elements));

    function generateMap(set) {
        let map = new Map();
        set.forEach((ele) => {
            map.set(ele, 0);
        });
        return map;
    }
    elements.forEach((el) => {
        map.set(el, map.get(el) + 1); 
    });
    let output = "";
    Array.from(map.entries()).forEach((arrKvp) => {
        let [key, value] = arrKvp;
        if (Number(value) % 2 !== 0) {
            output += key + " ";
        }
    });
    console.log(output);
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
