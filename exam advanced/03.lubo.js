class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error("Not enough parking space.");
        }
        this.vehicles.push({ carModel, carNumber, payed: false });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        const car = this.vehicles.find((c) => c.carNumber === carNumber);
        if (!car) {
            throw new Error("The car, you're looking for, is not found.");
        }
        if (!car.payed) {
            throw new Error(
                `${carNumber} needs to pay before leaving the parking lot.`
            );
        }

        this.vehicles = this.vehicles.filter((c) => c.carNumber !== carNumber);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        const car = this.vehicles.find((c) => c.carNumber == carNumber);
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (car.payed) {
            throw new Error(
                `${carNumber}'s driver has already payed his ticket.`
            );
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        const empty = this.capacity - this.vehicles.length;
        const emptySlots = `The Parking Lot has ${empty} empty spots left.`;

        const carsList =
            carNumber === undefined
                ? this.vehicles
                : [this.vehicles.find((c) => c.carNumber === carNumber)];

        const carsStats = carsList
            .sort((a, b) => a.carModel.localeCompare(b.carModel))
            .map(
                (c) =>
                    `${c.carModel} == ${c.carNumber} - {Has payed / Not payed}`
            );

        return [emptySlots, ...carsStats].join("\n");
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Volvo t602", "TX3693CA"));
console.log(parking.addCar("Volvo t601", "TX3692CA"));
console.log(parking.addCar("Volvo t603", "TX3694CA"));

console.log(parking.getStatistics("TX3692CA"));

console.log(parking.pay("TX3691CA"));

console.log(parking.removeCar("TX3691CA"));
