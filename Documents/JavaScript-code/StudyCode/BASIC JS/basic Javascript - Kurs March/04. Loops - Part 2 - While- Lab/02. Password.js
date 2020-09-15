function pass(input) {
    let userName = input.shift();
    let password = input.shift();

    let data = input.shift();
    while (data !== password) {

        data = input.shift();
    }
    console.log(`Welcome ${userName}!`);
}
pass (['Nakov', '1234', 'pass', '1324', '1234'])