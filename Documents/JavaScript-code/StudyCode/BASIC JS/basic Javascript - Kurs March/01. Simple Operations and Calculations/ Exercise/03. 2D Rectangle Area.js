function rectangleArea (x1,y1,x2,y2,){
let lenght = Math.abs(x1 - x2);  // Math.abs обръща числата в положителни
let width = Math.abs(y1 - y2);
let perimeter = 2 * (lenght + width);
let area = width * lenght;
console.log(area.toFixed(2));
console.log(perimeter.toFixed(2));
}
rectangleArea (60, 20, 10, 50);