function akuarium (lang, breit, hoch, zaetiProcent ){
let vmestimost = Number (lang * breit * hoch) * 0.001;
let zaeti = zaetiProcent * 0.01;

console.log((vmestimost * (1- zaeti)).toFixed(3));
}
akuarium(85, 75, 47, 17)