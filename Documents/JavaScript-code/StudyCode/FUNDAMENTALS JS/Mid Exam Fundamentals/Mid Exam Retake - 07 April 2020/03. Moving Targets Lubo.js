function solve (input) {
	const [targetStrings, ...commands] = input;
   
	if (targetStrings === 'End' || targetStrings === '') return;
   
	let targets = targetStrings.split(' ').map(Number);
	// console.log({targets})
   
	const inRange = (arr, index) => arr.length - 1 >= Number(index) && Number(index) >= 0;
   
	for (let i = 0; i < commands.length; i++) {
	  const currentCommand = commands[i];
   
	  if (currentCommand === 'End') break;
   
	  const [command, indexString, valueString] = currentCommand.split(' ');
	  const index = Number(indexString);
	  const value = Number(valueString);
	  // console.log({command, index, value, targets})
	  switch (command) {
		case 'Shoot':
		  if (inRange(targets, index)) {
			targets[index] -= value;
			if (targets[index] <= 0) {
			  targets.splice(index, 1);
			}
		  }
		  break;
		case 'Add':
		  if (inRange(targets, index)) {
			targets.splice(index, 0, value);
		  } else {
			console.log('Invalid placement!');
		  }
		  break;
		case 'Strike':
		  const lower = index - value;
		  const upper = index + value;
   
		  if (lower > -1 && upper <= targets.length - 1) {
			const lengthRemove = value === 0 ? 1 : upper - lower + 1;
			targets.splice(lower, lengthRemove);
		  } else {
			console.log('Strike missed!');
		  }
		  break;
	  }
	}
   
	console.log(targets.join('|'));
   }
   solve([
	'47 55 85 78 99 20',
	 'Shoot 1 55',
	 'Shoot 8 15',
	'Strike 3 1',
	 'Add 0 22',
	 'Add 2 40',
	 'Add 2 50',
	'End'
   ]);
// 100/100