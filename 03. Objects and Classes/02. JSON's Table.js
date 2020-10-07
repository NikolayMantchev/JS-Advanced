function solve(param) {
    let html = "<table>\n";
    for (const iterator of param) {
        obj = JSON.parse(iterator);

        html += "	<tr>\n";
        html += `		<td>${htmlEscape(obj.name)}</td>\n`;
        html += `		<td>${htmlEscape(obj.position)}</td>\n`;
        html += `		<td>${obj.salary}</td>\n`;
        html += "	</tr>\n";
    }
    html += "</table>";
    console.log(html);

    function htmlEscape(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        return text.replace(/[\"&'<>]/g, (ch) => map[ch]);
    }
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',

    '{"name":"Teo","position":"Lecturer","salary":1000}',

    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]);
// 100/100
