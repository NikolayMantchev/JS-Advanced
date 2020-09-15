function solve(input) {
    let output = input[0];
    for (let i = 0; i < input.length - 1; i++) {
        let curChar = input[i];
        let nextChar = input[i + 1];
        if (curChar !== nextChar) {
            output += nextChar;
        }
	}
	console.log(output);
}
solve('qqqwerqwecccwd');
// 100 / 100