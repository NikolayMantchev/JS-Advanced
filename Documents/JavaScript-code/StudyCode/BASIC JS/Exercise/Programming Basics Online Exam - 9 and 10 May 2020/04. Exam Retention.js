function solve(arg1, arg2) {
    let student = Number(arg1);
    let season = Number(arg2);
    let students = 0;
    let reTaken = 0;
    let cours1 = Math.ceil(student * 0.9);
    let cours2 = (cours1 * 0.9);
    
    for (let i = 1; i < season; i++) {
        
        reTaken += Math.ceil(cours2 * 0.8);
        let reWrithen = 0;
        if (i % 3 === 0) {

            reWrithen = (reTaken * 0.15);
        } else {
            reWrithen = Math.ceil(reTaken * 0.05);
        }
        students += reWrithen;
    }
    console.log(`Students: ${students}`);
}
solve("100", "6");