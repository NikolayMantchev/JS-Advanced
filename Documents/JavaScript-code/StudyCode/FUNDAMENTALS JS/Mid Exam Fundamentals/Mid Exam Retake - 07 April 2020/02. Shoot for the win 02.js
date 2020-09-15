function solve (input) {
	// input.pop(); // разкарвам end командата
	const target = input.shift().split(' ').map(Number); // Взимам изходния масив който ще обработвам
	// let count = 0; // коунтер за застреляни мишени
	for (let i = 0; i < input.length; i++) { // итерирам през всеки индекс
	  const shotStr = input[i];
	  if (shotStr === 'End') break;
	  const shot = Number(shotStr);
   
	  if (shot < 0 || shot >= target.length) continue;
   
	  let currentValue = target[shot]; // ne zapazvam 46 !? see comment by examples
	  // target.splice(curTarget[i], 1, -1)
	  for (let j = 0; j < target.length; j++) {
		if (target[j] === -1) continue;
   
		if (shot === j) {
		  target[j] = -1;
		  continue;
		}
   
		if (currentValue >= target[j]) {
		  target[j] += currentValue;
		} else {
		  target[j] -= currentValue;
		}
	  }
	}
	const count = target.filter(i => i === -1).length;
   
	console.log(`Shot targets: ${count} -> ${target.join(' ')}`);
   }
   solve(['24 50 36 70', '0', '4', '3', '1', 'End']
)
// 100/100