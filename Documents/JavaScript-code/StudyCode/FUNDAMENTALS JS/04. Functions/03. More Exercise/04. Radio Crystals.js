function radioCristals(arr) {
    let finishedCristal = arr[0];
    let cristal = arr[1]
    let cut = cristal => cristal / 4;
    let lap = cristal => cristal * 0.8;
    let grind = cristal => cristal - 20;
    let etch = cristal => cristal - 2;
    let xRay = cristal => cristal + 1;
    let transport = cristal => Math.trunc(cristal)
    
    console.log(`Processing chunk ${arr[1]} microns`)

    console.log(`Cut x${cut}`)
    console.log(restMaterial)
}
radioCristals([1375, 50000])
// not finished