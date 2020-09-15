function solve(input) {
	input.sort()
	let companie = {};
    function companies(arr) {
        const output = {};
        arr.forEach((row) => {
            let [comp, id] = row.split(" -> ");
			

			if(output[comp] !== id){    // from here -> !!!?? id must be uniqe !!
				
				output[comp] = id;
			} else {
			
			}							// to here ?!
            
        });
        return (companie = output);

	}
	companies(input)
	console.log({companie});
	Object.entries(companie).forEach(element => {
		let id = element[1].split(' ');
		console.log(`${element[0]}`);
		id.forEach(i => {console.log(`-- ${i}\n`)});
	});
	
}
solve([
    "SoftUni -> AA12345",
	"SoftUni -> AA12345",
    "SoftUni -> BB12345",

    "Microsoft -> CC12345",

    "HP -> BB12345",
]);
// 0/100