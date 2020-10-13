function solve(input) {
    let res = input
        .map(([width, height]) => ({
            width,
            height,
            area: () => width * height,
            compareTo: function (rect) {
                return rect.area() - this.area() || rect.width - this.width;
            },
        }))
        .sort((a, b) => a.compareTo(b));
    return res;
}
solve([
    [10, 5],
    [5, 12],
]);
