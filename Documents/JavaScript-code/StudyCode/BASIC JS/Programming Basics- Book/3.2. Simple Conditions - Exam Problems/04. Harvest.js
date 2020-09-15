function harvest (arg1,arg2,arg3,arg4){
    area = parseInt(arg1);
    kgFromM2 = parseFloat(arg2);
    neededWine = parseInt(arg3);
    worker = parseInt(arg4);
    kg = area * kgFromM2 * 0.4 ;
    literProduced = kg / 2.5;
    if (neededWine <= literProduced) {
        let wineLeft = literProduced - neededWine;
        console.log(`Good harvest this year! Total wine: ${Math.floor(literProduced)} liters.`)
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineLeft / worker)} liters per person.`);
    } else {(neededWine > literProduced) 
        console.log(`It will be a tough winter! More ${Math.floor(neededWine - literProduced)} liters wine needed.`);
    }
}


harvest (1020, 1.5, 425, 4);

// 100/100 points na judge