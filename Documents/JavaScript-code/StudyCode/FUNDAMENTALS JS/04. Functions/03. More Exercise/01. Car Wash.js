function carWash(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        let curentCommand = arr[i];
        if (curentCommand === 'soap') {
            value += 10;
        } else if (curentCommand === 'water'){
            value *= 1.20;
        }  else if (curentCommand === 'vacuum cleaner'){
            value *= 1.25;
        } else if (curentCommand === 'mud'){
            value *=0.9;
        } 
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])