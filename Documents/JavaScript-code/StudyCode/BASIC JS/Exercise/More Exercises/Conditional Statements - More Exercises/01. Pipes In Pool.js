function poolPipes (volume, p1, p2, hour){
    let v = Number(volume);
    let pipe1 = parseInt(p1)
    let pipe2 = parseInt(p2);
    let h = parseFloat (hour);
    let water = (pipe1 + pipe2) * h;
        let poolVolume = water / v * 100;
        let p1Percent = pipe1 * h / water * 100;
        let p2Percent = pipe2 * h / water * 100;
    if (water <= v) {
        console.log (`The pool is ${(poolVolume).toFixed(2)} % full. Pipe 1: ${(p1Percent).toFixed(2)}%. Pipe 2: ${(p2Percent).toFixed(2)}%.`);
        } else {
            console.log (`For ${parseFloat(hour)} hours the pool overflows with ${parseFloat(water - v)} liters.`);
        }
    }
    poolPipes ("1000", "100", "120", "3",);
    
    // Result 100/100