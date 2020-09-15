function firm(neededHours, availableDays, workers) {
    let workDays = (availableDays * 8) * 0.9;
    let overtimeHours = Math.floor(workers * availableDays * 2);
    let totalHowersWorked = workDays + overtimeHours;
    let enoughTime = Math.floor(totalHowersWorked - neededHours);
    if (neededHours <= totalHowersWorked) {
        console.log(`Yes!${enoughTime} hours left.`);
    } else {
        console.log(`Not enough time!${Math.abs(enoughTime)} hours needed.`);
    }
}

firm (99, 3, 1,);