function soleve(input) {
    const nameList = input.shift().split(', ');
    let tokens = input.shift().split(' ');
    let comand = tokens[0];
    let blacklistetCount = 0;
    let lost = 0;
    while (tokens[0] !== 'Report') {

        let value = tokens[1];
        let newName = tokens[2];
        switch (tokens[0]) {
            case 'Blacklist':
                if (!nameList.includes(value)) {
                    console.log(`${value} was not found.`);
                } else {
                    let indexOfvalue = nameList.indexOf(value);
                    let nameToChange = nameList[indexOfvalue];
                    nameList.splice(nameList[indexOfvalue], 1, 'Blacklisted');
                    console.log(`${nameToChange} was blacklisted.`);
                    blacklistetCount++;
                    tokens = input.shift().split(' ');
                }
                break;
            case 'Error':
                value = Number(value)
                if (nameList[value] !== "Blacklisted" && nameList[value] !== "Lost") {
                    let nameToChange = nameList[value];
                    nameList.splice(value, 1, "Lost");
                    console.log(`${nameToChange} was lost due to an error.`);
                    lost++;
                }
                tokens = input.shift().split(' ');

                break;
            case 'Change':
                value = Number(value)
                let nameToChange = nameList[value]
                if (nameList.length - 1 > value && value > -1) {
                    nameList.splice(value, 1, newName)
                    console.log(`${nameToChange} changed his username to ${newName}.`);
                }
                tokens = input.shift().split(' ');
                break;
                tokens = input.shift().split(' ');
        }
    }
    console.log(`Blacklisted names: ${blacklistetCount}`);
    console.log(`Lost names: ${lost}`);
    console.log(nameList.join(' '));
}
soleve([
    'Mike, John, Eddie, William',
'Error 3',
'Error 3',
'Change 0 Mike123',
'Blacklist Eddie',
'Report'
]
);
// 60/100