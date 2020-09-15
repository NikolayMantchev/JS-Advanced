function solve(input) {
    let storage = new Map();

    input.forEach((element) => {
        let el = element.split(" ");
        let [item, quantityText] = el;
		let quantity = Number(quantityText);
		
		if (storage.has(item)){
			quantity += storage.get(item)
		}
		storage.set(item, quantity);
	});
	for (const [item, quantity] of storage){
		console.log(`${item} -> ${quantity}`);
	}
	
}
solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
