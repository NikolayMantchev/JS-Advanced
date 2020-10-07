function solve(arr, func) {
	let result = arr.reduce((acc, curr) => {
		acc.push(func(curr));
		return acc;
	},[])
	return result;
}

solve();