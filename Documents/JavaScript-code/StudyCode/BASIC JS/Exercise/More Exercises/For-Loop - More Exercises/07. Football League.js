function solve(input) {
    let capacity = Number(input.shift());
    let fans = Number(input.shift());
    let SectorA = 0;
    let SectorB = 0;
    let SectorV = 0;
    let SectorG = 0;
    for (let i = 0; i <= fans; i++) {
        let curentSector = input[i];
        if (curentSector === "A") {
            SectorA++;
        }
        if (curentSector === "B") {
            SectorB++;
        }
        if (curentSector === "V") {
            SectorV++;
        }
        if (curentSector === "G") {
            SectorG++;
        }
    }
    console.log(`${(SectorA / fans * 100).toFixed(2)}%`)
    console.log(`${(SectorB / fans * 100).toFixed(2)}%`)
    console.log(`${(SectorV / fans * 100).toFixed(2)}%`)
    console.log(`${(SectorG / fans * 100).toFixed(2)}%`)
    console.log(`${(fans / capacity * 100).toFixed(2)}%`)
} 
solve (
    [
        '76', '10', 'A', 'V',
        'V',  'V',  'G', 'B',
        'A',  'V',  'B', 'B'
      ]
)