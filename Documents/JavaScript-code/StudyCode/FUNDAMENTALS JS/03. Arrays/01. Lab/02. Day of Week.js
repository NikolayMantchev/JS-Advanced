function dayOfWeeks(days) {
    let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (days >= 0 && days <= 7) {
        console.log(`${day[days - 1]}`)
    } else {
        console.log('Invalid day!')
    }
}
dayOfWeeks([7])

