function solve(input) {
    let userName = input.shift()
    let password = userName.split('').reverse().join('');       // Reverse String from array
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        let curent = input[i];
        if (password !== curent) {
            counter++;
            if (counter > 3) {
                console.log(`User ${userName} blocked!`)
                break;
            }
            console.log("Incorrect password. Try again.")
        } else {
            console.log(`User ${userName} logged in.`)
        }
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'recA']);
// 100/100