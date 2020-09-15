function solve(word, text) {
    isFound = true;
    searchText = text.split(" ");
    for (let i = 0; i < searchText.length; i++) {
        if (word.toLowerCase() === searchText[i].toLowerCase()) {
			return console.log(word);
        } else{
			isFound = false
		}
	}
	if(!isFound){
		console.log(`${word} not found!`);
	}
}
solve('python', 

'JavaScript is the best programming language' );
// 100/100