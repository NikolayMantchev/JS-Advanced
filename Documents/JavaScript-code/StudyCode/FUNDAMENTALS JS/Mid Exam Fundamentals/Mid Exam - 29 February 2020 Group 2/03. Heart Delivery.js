function solve(arr) {
    let houses = arr.shift().split('@').map(x => Number(x));
lastPosition = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let curHouse = arr[i].split(' ');
        let jump = Number(curHouse[1]) + lastPosition;

        if (jump < houses.length) {

            houses.splice(jump, 1, (houses[jump] - 2))

        } if ( houses[jump] === 0) {
            console.log(`Place ${jump} has Valentine's day.`)

        }
        lastPosition = jump
    }
console.log(`Cupid's last position was ${lastPosition}.`);
console.log(`Cupid has failed ${lastPosition} places.`);
}
solve([
'2@4@2',
'Jump 2',
'Jump 2',
'Jump 8',
'Jump 3',
'Jump 1',
'Love!'

])