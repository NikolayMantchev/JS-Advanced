function numsequence(n, k) {
    let seq = [1];
    for (let curent = 1; curent <= n; curent++){
        let start = Math.max(0, curent - k) ;
        let end = curent - 1 ;
        let sum = start + end;   // tuk da se dosmetne 
        seq[curent] = sum;       
    }
    console.log(seq.join(' '))
}
numsequence(6, 3)
// nedovar6ena