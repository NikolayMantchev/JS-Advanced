function solve(input) {
    let width = Number(input.shift());
    let hidth = Number(input.shift());
    let lenght = Number(input.shift());
    
    let volumeRoom = width * hidth * lenght;
    let volumePackage = 0;
    while (volumePackage < volumeRoom) {
        let curentNumber = Number(input.shift());     // Turn String to NAN !!!!
        volumePackage += curentNumber;
        if (curentNumber === 'Done') {
            m3Rest = volumeRoom - volumePackage;
            console.log(`${m3Rest} Cubic meters left.`);
        }
        curentNumber++;

    }
    let m3NotInaf = volumeRoom - volumePackage;
    console.log(`No more free space! You need ${m3NotInaf} Cubic meters more.`);
}
solve([ '10', '1', '2', '4', '6', 'Done'])

// Nedovarshena