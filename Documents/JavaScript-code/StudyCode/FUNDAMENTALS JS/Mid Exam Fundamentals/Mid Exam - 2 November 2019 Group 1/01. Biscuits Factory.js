function solve(input) {
    let productionPerDay = Number(input[0]);
    let workersCount = Number(input[1]);
    let competingFactory = Number(input[2]);
    let dayProductionBruto = productionPerDay * workersCount;
    let lowerProduction = dayProductionBruto * 0.75;
    let monthNetoProduction = dayProductionBruto * 20 + lowerProduction * 10;
    let diference = monthNetoProduction - competingFactory;
    let result = ((diference / competingFactory) * 100).toFixed(2);
	result = Number(result)
	console.log(`You have produced ${Math.round(monthNetoProduction)} biscuits for the past month.`);
	if (result > 0) {
        console.log(`You produce ${result.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${Math.abs(result).toFixed(2)} percent less biscuits.`);
    }
}
solve(["65", "12", "26000"]);
// 80/100