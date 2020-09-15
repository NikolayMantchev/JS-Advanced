function solve(input) {
    let participants = Number(input.shift());
    let money = 0;
    let totalSweetyes = 0;
   
    for (let i = 1; i <= participants; i++) {

        let nameOfParticipant = input.shift();
        let cookies = 0;
        let cakes = 0;
        let waffles = 0;
        let sweetyType = input.shift();
        while (sweetyType !== "Stop baking!") {
            let sweetyesBaked = Number(input.shift());

            totalSweetyes += sweetyesBaked;
            if (sweetyType === "cookies") {
                money += sweetyesBaked * 1.5;
                cookies += sweetyesBaked;

            }
            if (sweetyType === "cakes") {
                money += sweetyesBaked * 7.8;
                cakes += sweetyesBaked;
            }
            if (sweetyType === "waffles") {
                money += sweetyesBaked * 2.3;
                waffles += sweetyesBaked;
            }

            sweetyType = input.shift();
        }
        console.log(`${nameOfParticipant} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`)

    }
    console.log(`All bakery sold: ${totalSweetyes}`);
    console.log(`Total sum for charity: ${money.toFixed(2)} lv.`)
}
solve([
    '3', 'Iva',
    'cookies', '5',
    'cakes', '3',
    'Stop baking!', 'George',
    'cakes', '7',
    'waffles', '2',
    'Stop baking!', 'Ivan',
    'cookies', '6',
    'Stop baking!'
]);