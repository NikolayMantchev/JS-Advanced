function solve(recordInSeconds, distanceInMeters, meterPerSecond) {
    recordInSeconds = Number(recordInSeconds);
    distanceInMeters = Number(distanceInMeters);
    meterPerSecond = Number(meterPerSecond);
    let waterResist = Math.floor (distanceInMeters / 15) * 12.5;
    let result = (distanceInMeters * meterPerSecond) + waterResist
    if (result < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(result).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(result - recordInSeconds).toFixed(2)} seconds slower.`)
    }

}
solve(55555.67, 3017, 5.03)

//   100/100

