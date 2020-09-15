function solve(arg1, daytime) {
    let temperature = Number(arg1);
    let outfit = '';
    let shoes = '';
    if (temperature >= 10 && temperature <= 18) {
        if (daytime === 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if ((daytime === 'Afternoon') || (daytime === 'Evening')) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (temperature > 18 && temperature <= 24) {
        if (daytime === 'Morning') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (daytime === 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (daytime === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (temperature >= 25) {
        if (daytime === 'Morning') {
            outfit = 'Т-Shirt';
            shoes = 'Sandals';
        } else if (daytime === 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if (daytime === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}

solve(25, 'Evening');

//90/100