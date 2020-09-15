function solve (arr) {
 // const [nums, ...commands] = arr
 const field = arr.shift().split('|').map(Number);

 let points = 0;
 let comandLine = arr.shift();
 while (comandLine != 'Game over') {
   // const [command, index, target] = comandLine
   let curent = comandLine.split('@');
   let comand = curent[0];
   let startIndex = Number(curent[1]);
   let length = Number(curent[2]);
   const lengthDelta = length % field.length;

   if (comand === 'Shoot Left') {
     if (startIndex <= field.length - 1 && startIndex > -1) {
       // const index = field.length - (lengthDelta + startIndex)
       const index = startIndex - length < 0
         ? field.length - (lengthDelta - startIndex)
         : startIndex - length;

       const target = field[index];
       const newPoints = target >= 5
         ? 5
         : target;

       const newTarget = target >= 5
         ? target - 5
         : 0;

       field.splice(index, 1, newTarget);
       points += newPoints;
     }
   }
   if (comand === 'Shoot Right') {
     if (startIndex <= field.length - 1 && startIndex > -1) {
       // let index = (length % field.length) + startIndex
       const index = ((lengthDelta + startIndex) % field.length);

       const target = field[index];
       const newPoints = target >= 5
         ? 5
         : target;

       const newTarget = target >= 5
         ? target - 5
         : 0;

       field.splice(index, 1, newTarget);
       points += newPoints;
     }
   }
   if (curent[0] === 'Reverse') {
     field.reverse();
   }
   comandLine = arr.shift();
 }

 console.log(field.join(' - '));
 console.log(
   `Iskren finished the archery tournament with ${points} points!`
 );
}
solve([
 '10|10|10|10|10',
 'Shoot Left@0@2', // 1@4
 'Shoot Right@4@5', // 2@4
 'Shoot Right@6@5',
 'Reverse',
 'Game over',
 ''
]);

// 100/100