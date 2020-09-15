function matrix(number) {
    function firstLine(num) {
        let firstLinePrint = '';
        for (let i = 0; i < num; i++) {
            firstLinePrint += num + ' ';
        }
        return firstLinePrint;

    }
    function otherLines(num) {
        for (i = 0; i < num; i++) {
            console.log(firstLine(number));
        }
    }
    otherLines(number)
}
matrix(4)