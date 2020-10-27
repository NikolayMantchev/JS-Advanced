class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length < 0) {
            throw new Error(`Not enough parking space.`);
        }
        this.vehicles.push({ carModel, carNumber, payed: false });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
    removeCar(carNumber) {
        const car = this.vehicles.find((c) => c.carNumber == carNumber);
        if (car === undefined) {
            throw new Error(`The car, you're looking for, is not found.`);
        }
        if (car.payed === false) {
            `${carNumber} needs to pay before leaving the parking lot.`;
        }

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        const car = this.vehicles.find((c) => c.carNumber == carNumber);
        if (car == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (car.payed == true) {
            `${carNumber}'s driver has already payed his ticket.`;
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }
    getStatistics(carNumber) {
        const empty = this.capacity - this.vehicles.length;
        if (carNumber) {
            return `${carModel} == ${this.vehicles.carNumber} - ${this.vehicles.payed}`;
        }

        if (empty > 0) {
            // const car = this.vehicles.find((c) => c.carModel == carModel);
            return `${this.vehicles.carModel} == ${this.vehicles.carNumber} - ${this.vehicles.payed}`;
        }
        if (empty < 0) {
            const sortedPets = this.vehicles.ObjectKeys.sort((a, b) =>
                a.carModel.localeCompare(b.carModel)
            );
            return `The Parking Lot has ${sortedPets} empty spots left.`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));

console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));

console.log(parking.removeCar("TX3691CA"));
