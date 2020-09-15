function solve ([arg1, arg2, arg3]){
    let kozunak = Number (arg1) * 3.20;
    let koriYaica = Number (arg2) * 4.35;
    let kgKurabii = Number (arg3) * 5.40;
    let yaiceBr = (arg2 * 12) * 0.15;
    let obshtoRazhod = (kozunak + koriYaica + kgKurabii + yaiceBr).toFixed(2)    
    console.log(obshtoRazhod);
  
    
}
solve ([3, 2, 3,]);