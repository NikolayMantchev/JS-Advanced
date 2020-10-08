class Company { 
    constructor(departments){
		this.departments = [];
	}
	addEmployee(userName, salary, position, department) {
		for (const arg of [userName, salary, position, department]) {
			this.validate(arg);
		}
		
		if (!this.departments[department]) {
			this.departments[department]=[];
		}
		this.departments[department].push({userName, salary, position, });
		console.log(`New employee is hired. Name: ${userName}. Position: ${position}`);
	}
	validate(value){
		if (!value || value < 0) {
			throw new Error (`Invalid input!`)
		} 
	}
	bestDepartments (){
		let departments = {};
		Object.entries(this.departments).forEach(([department, employee]) => {
			let totalSalary=employee.map(e => e.salary).reduce((acc, curr) => acc += curr)
			department[departments] = totalSalary / employees.lenght;
		});
		let maxSalary = 0;
		let bestDepartment;
		Object.entries(departments).forEach(([department, avgSalary])=> {
if (maxSalary > avgSalary) {
	 maxSalary = avgSalary;
	 bestDepartment = department  
}
console.log(`Best department is: ${bestDepartment}`);
		})
	}
}
let c = new Company(); 

c.addEmployee("Stanimir", 2000, "engineer", "Construction"); 