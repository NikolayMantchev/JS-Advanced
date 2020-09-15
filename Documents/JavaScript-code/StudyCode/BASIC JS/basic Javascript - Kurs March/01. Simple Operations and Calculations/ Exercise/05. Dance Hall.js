function freeSpace(lenghtSaal, widthSaal, garderob){
let lengthSaalCM = Number (lenghtSaal * 100);
let widthSaalCM = Number (widthSaal * 100);
let saalArea = lengthSaalCM * widthSaalCM;
let garderobArea = Number ((garderob * 100) * (garderob * 100));
let sitBank = Number (saalArea / 10);
let people = (saalArea - garderobArea - sitBank) / 7040;
console.log(Math.floor(people))
}
freeSpace(50, 25, 2);

// 100/100 Result