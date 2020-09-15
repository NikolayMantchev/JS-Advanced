function solve(number) {
    let n = Number(number);
    let num = 1;
    for (let i = 0; i <= n; i += 2) {
        console.log(num);
        num = num * 2 * 2;
    }
}
solve(7);


// 4.	Четни степени на 2
// Да се напише програма, която чете число n, въведено от потребителя, 
// и печата четните степени на 2 ≤ 2n: 20, 22, 24, 26, …, 2n. 
