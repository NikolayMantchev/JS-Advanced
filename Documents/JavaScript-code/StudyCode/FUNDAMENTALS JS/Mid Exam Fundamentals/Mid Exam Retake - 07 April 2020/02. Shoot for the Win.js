function solve (input) {
    const [nums, ...shots] = input;
   
    
   
    let target = nums.split(' ').map(Number);
   
    const shootTargets = (arr, index) => {
      const currentElm = arr[index];
   
      return arr.map((trg, i) => {
        if (trg === -1) return trg;
        if (i === index) return -1;
   
        return currentElm < trg
          ? trg - currentElm
          : trg + currentElm;
      });
    };
   
    for (let index = 0; index < shots.length; index++) {
      const shot = shots[index];
   
      if (shot === 'End') break;
   
      if (Number(shot) < 0 || Number(shot) >= target.length) continue;
   
      target = shootTargets(target, Number(shot));
      
    }
   
    const count = target.filter(i => i === -1).length;
   
    console.log(`Shot targets: ${count} -> ${target.join(' ')}`);
   }







/*
function solve(input) {
    input.pop();                                            // разкарвам end командата
    const target = input.shift().split(' ').map(Number);    // Взимам изходния масив който ще обработвам
    let count = 0;                                          // коунтер за застреляни мишени
    for (let i = 0; i < input.length; i++) {                // итерирам през всеки индекс 
        let curTarget = input.map(Number);                      
        if (curTarget[i] < curTarget.length && curTarget[i] >= 0) {  // проверка да не е отрицателени дали не надхвърля дължината на индексите
            count++;
            let lastValidNum = target[i]                    // ne zapazvam 46  !? see comment by examples
            target.splice(curTarget[i], 1, -1)
            for (let j = 1; j < target.length; j++) {
                if (lastValidNum <= target[j] && target[j] !== -1) {
                    target[j] -= lastValidNum;
                } else if (lastValidNum > target[j] && curTarget > 0) {
                    target[j] += lastValidNum;
                }
            }
        }
    }
    console.log(`Shot targets: ${count} -> ${target.join(' ')}`);
}
*/
solve(['24 50 36 70', '0', '4', '3', '1', 'End']
)
// 30/100