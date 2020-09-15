function solve(num) {

    let sum = 0;
    for (let i = 0; i <= num; i += 1) {
        let curnum = i + 1;
        if (curnum % 2 !== 0) {
            console.log(curnum);
            sum += curnum;
        }
    }
    console.log(`Sum: ${sum}`);

}
solve(5)