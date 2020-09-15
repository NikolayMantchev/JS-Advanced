function solve(input){
	let output = {};
	let resourses = [];
	let quantity = [];
    for (let i = 0; i < input.length; i +=2) {
        resourses=input[i];
		quantity= Number (input[i+1]);
		if(output.hasOwnProperty(resourses)){
		output[resourses] += quantity;
	} else {
		output[resourses] = quantity;
	}
	}
	Object.entries(output).forEach(element => {
		
		console.log(`${element[0]} -> ${element[1]}`);
	});
}
solve([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ] )
	// 100/100