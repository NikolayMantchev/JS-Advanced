function solve(input) {
    let acount = [];
    let game = input.shift();
    acount = game.split(' ');
    let flag = false;
    game = input.shift().split(' ')
    while (flag === false) {
        switch (game[0]) {
            case 'Install':
                if (!acount.includes(game[1])) {
                    acount.push(game[1]);
                }
                break;
            case 'Uninstall':
                if (acount.includes(game[1])) {
                    let index = acount.indexOf(game[1]);
                    acount.splice(index, 1);
                }
                break;
            case 'Update':
                if (acount.includes(game[1])) {
                    let index = acount.indexOf(game[1]);
                    acount.splice(index, 1)
                    acount.push(game[1])
                }
                break;
            case 'Expansion':
                let expansion = game[1].split('-');

                if (acount.includes(expansion[0])) {
                    let index = acount.indexOf(expansion[0]);
                    let gameExt = `${expansion[0]}:${expansion[1]}`;
                    acount.splice(index + 1, 0, gameExt);
                }
                break;
        }
        game = input.shift().split(' ');
        if (game.includes('Play!')) {
            flag = true;
        }
    }
    console.log(acount.join(' '));
}
solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']

)

// totaly wrong