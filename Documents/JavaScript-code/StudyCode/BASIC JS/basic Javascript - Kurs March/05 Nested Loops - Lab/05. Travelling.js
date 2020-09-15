function solve(input) {
    let destination = input.shift();
    while (destination !== "End") {
        let cost = Number(input.shift());
        let savings = 0;
        while (savings < cost) {
            let amount = Number(input.shift())
            savings += amount;
        }
        console.log(`Going to ${destination}!`);
        destination = input.shift();
    }
}
solve(
    [
        'Greece', '1000', '200',
        '200', '300', '100',
        '150', '240', 'Spain',
        '1200', '300', '500',
        '193', '423', 'End',
        ''
    ]
)