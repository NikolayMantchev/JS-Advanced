function solve(input) {
    let output = {};
    let garageNumbers = garageNum(input);
    function garageNum(arr) {
        let number = [];
        arr.forEach((element) => {
            let [num, ...{ rest }] = element.split(" ");
            number.push(num);
        });
        return number;
    }
    garageNum(input);
    console.log(garageNumbers);
    function kvp(arr) {
        let line = [];
        let kvp= [];
        let kvpObj = {};
        for (let i = 0; i < input.length; i++) {
			let curLine = input[i].split(" - ");
			
           
                kvpObj = curLine[1].split(", ");
                for (const el of kvpObj) {
					
				
					let key = el.split(": ");
					if (curLine[0] === garageNumbers[i]) {
						output[key[0]] = key[1];
						
					}

                }
				kvp += curLine
				console.log(`Garage № ${curLine}`);
		}
		console.log(kvp);
		console.log(kvpObj);
        return kvp;
    }
    let infos = kvp(input);
	console.log(infos);
	
}
solve([
    "1 - color: blue, fuel type: diesel",
    "1 - color: red, manufacture: Audi",
    "2 - fuel type: petrol",
    "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
// nedovar6ena