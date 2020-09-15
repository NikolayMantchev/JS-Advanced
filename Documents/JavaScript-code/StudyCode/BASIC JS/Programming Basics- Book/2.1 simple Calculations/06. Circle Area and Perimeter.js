function solve ([r]){
    r = Number(r);
    let perimeter = 2 * Math.PI * r;
    let area = Math.PI * r * r;
    console.log('Area = ' + area);
    console.log('Perimeter =' + perimeter);
}
solve (['5']);