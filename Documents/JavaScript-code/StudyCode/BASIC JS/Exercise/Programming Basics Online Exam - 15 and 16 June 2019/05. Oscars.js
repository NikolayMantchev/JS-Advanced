function solve(input) {
    let actorName = input.shift();
    let academyPoints = Number(input.shift());
    let numberOfEvaluating = Number(input.shift());
    let result = academyPoints;
    let ifTrue = false;
    while (numberOfEvaluating > 0) {
        let nameOfEvaluator = input.shift();
        let evaluatorPointsGiven = Number(input.shift());
        let nameLenght = Number(nameOfEvaluator.length);
        result += nameLenght * (evaluatorPointsGiven / 2);

        numberOfEvaluating--;
        if (result > 1250.5) {
            ifTrue = true;
            break;
        }
    }
    let totalResult = Math.abs(result - 1250.5);
    if (ifTrue) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${result.toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${actorName} you need ${totalResult.toFixed(1)} more!`)
    }
}
solve([
    'Sandra Bullock', '340',
    '5', 'Robert De Niro',
    '50', 'Julia Roberts',
    '40.5', 'Daniel Day-Lewis',
    '39.4', 'Nicolas Cage',
    '29.9', 'Stoyanka Mutafova',
    '33', ''
])
// 100/100