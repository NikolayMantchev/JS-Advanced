function solve(year){
    console.log(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "yes" : "no")
}
solve(1984)