function solve(input) {
    let health = 100;
    let bitcoins = 0;
    let tokens = input.split('|');
    let isDead = false;
    let kiledBy = '';
    let bestRoom = 0;
    for (let i = 0; i < tokens.length; i++) {
        let curent = tokens[i].split(' ')
        let comand = curent[0];
        let number = Number(curent[1]);
        if (comand === 'potion') {
            if (health <= 100) {
                let healed = number;
                if ((health + number) > 100) {
                    healed = 100 - health;
                    health = 100;
                } else {
                    health += number;
                }
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (comand === 'chest') {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${comand}.`);
            } else {
                isDead = true;
                kiledBy = comand;
                bestRoom = i + 1;
                break;
            }
        }
    }
    if (isDead) {
        console.log(`You died! Killed by ${kiledBy}.`);
        console.log(`Best room: ${bestRoom}`);
    } else {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
        
    }
}
solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')


// djudje 100/100  