function polution(num, arr) {
    const area = num.map(x => x.split(' ').map(Number))
    const commands = arr.map(x => x.split(','));
    for (let i = 0; i < arr.length; i++) {
        let curentComand = commands.shift();
        let inputComand = curentComand[0].split(' ');
        let block = Number(inputComand[1]);
        let comand = inputComand[0];
        if (comand === 'breeze') {
            const newRow = (area[block]).map(x => x < 15 ? x : x - 15);
            area[block].splice(0, 5, ...newRow);
        } else if (comand === 'gale') {
            for (let i = 0; i < 5; i++) {
                const row = area[i]
                if (row[block] > 20) {
                    row.splice(block, 1, row[block] - 20)
                }
            }
        } else if (comand === 'smog') {
            for (let i = 0; i < area.length; i++) {
                const curentRow = area[i].map(x => x + block);
                area[i].splice(0, 5, ...curentRow);
            }
        }
    }
    let polutionArea = [];
    for (let i = 0; i < area.length; i++) {
        const curentRow = area[i].map(x => x >= 50 ? polutionArea.push(`[${i}-${area[i].indexOf(x)}]`) : x);
    }
    if (polutionArea.length !== 0) {
        console.log(`Polluted areas: ${polutionArea.join(', ')}`);
    } else {
        console.log(`No polluted areas`);
    }
}
polution(
    ["5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24"],
    ["breeze 1", "gale 2", "smog 35"]
)
// 80/100