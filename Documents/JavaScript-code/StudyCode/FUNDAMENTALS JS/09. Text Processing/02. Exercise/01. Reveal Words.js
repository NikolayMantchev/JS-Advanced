function solve(word, text) {
	tokens = word.split(", ");
	let newText= '';
    for (let i = 0; i < tokens.length; i++) {
        let curWord = tokens[i];
		 let curNewText = '';
		text.split(" ").forEach((el) => {
		
			if (
                el.startsWith("*") && 
                el.endsWith("*") &&
                tokens[i].length === el.length
            ) {
				el = curWord;
				curNewText += ' ' + el;
				console.log(newText);
            } else {
				curNewText+= ' ' + el;
			}
        });
		text = curNewText
    }
    console.log(text.trimStart());
}
solve(
    "great, learning",

    "softuni is ***** place for ******** new programming languages"
);
// 100/100

function solve(arg,text){

    let words = arg.split(', ');

    words.forEach((word) => {
        let asterix = '*'.repeat(word.length);
        text=text.replace(asterix,word);
    });
    console.log(text);
}
solve(
    "great, learning",

    "softuni is ***** place for ******** new programming languages"
);
