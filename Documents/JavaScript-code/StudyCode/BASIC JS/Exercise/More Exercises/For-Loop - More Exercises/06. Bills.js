function bills(input) {
    let monts = Number(input[0]);
    let water = monts * 20;
    let internet = monts * 15;
    let electricity = 0;
    let others = 0;
    for (let i = 1; i <= monts; i++) {
        let curnum = Number(input[i]);
        electricity += curnum;
        others += (curnum + 35) * 1.2;
    }
    let average = (electricity + water + internet + others) / monts;
    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`)
    console.log(`Internet: ${internet.toFixed(2)} lv`)
    console.log(`Other: ${others.toFixed(2)} lv`)
    console.log(`Average: ${average.toFixed(2)} lv`)
}
bills([
    '8',      '123.54',
    '231.54', '140.23',
    '100',    '122.4',
    '430',    '178.52',
    '64.2'
  ]);