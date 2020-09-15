function getTriangleArea(a, b) {
    return (a * b) / 2;
}
function solve([length, higth]) {
    const a = Number(length);
    const b = Number(higth);

    const area = getTriangleArea(a, b);
    console.log(area);
}
solve(["3", 4])