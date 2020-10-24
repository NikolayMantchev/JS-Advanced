class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = {};
        this.totalProfit = 0;
    }

    currentWorkload() {
        return Object.keys(this.clients).reduce(
            (acc, owner) =>
                acc +
                this.clients[owner].reduce(
                    (ownAcc, pet) =>
                        pet.procedures.length > 0 ? ownAcc + 1 : ownAcc,
                    0
                ),
            0
        );
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload() === this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }

        const pets = this.clients[ownerName];
        const currentPet = pets && pets.find((p) => p.petName === petName);
        if (currentPet && currentPet.procedures.length > 0) {
            throw new Error(
                `This pet is already registered under ${ownerName} name! ${
                    currentPet.petName
                } is on our lists, waiting for ${currentPet.procedures.join(
                    ", "
                )}.`
            );
        }

        const newCurrent = { petName, kind, procedures };
        const newPets = pets ? [...pets, newCurrent] : [newCurrent];

        this.clients[ownerName] = newPets;

        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        const pets = this.clients[ownerName];
        if (pets === undefined) {
            throw new Error("Sorry, there is no such client!");
        }

        const currentPet = pets.find((p) => p.petName === petName);
        if (currentPet === undefined || currentPet.procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        this.totalProfit += currentPet.procedures.length * 500;

        currentPet.procedures = [];

        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        const percentages = (this.currentWorkload() / this.capacity) * 100;
        const profit = this.totalProfit;
        const sortedOwnerNames = Object.keys(this.clients).sort();

        const sortPets = (pets) =>
            pets.sort((a, b) => a.petName.localeCompare(b.petName));

        const ownerPetInfo = sortedOwnerNames.flatMap((name) => {
            return [
                `${name} with:`,
                ...sortPets(this.clients[name]).map(
                    (pet) =>
                        `---${
                            pet.petName
                        } - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(
                            ", "
                        )}`
                ),
            ];
        });
        return [
            `${this.clinicName} is ${Math.floor(percentages)}% busy today!`,
            `Total profit: ${profit.toFixed(2)}$`,
            ...ownerPetInfo,
        ].join("\n");
    }
}
/*
   const clients = {
	[owner]: [
	  {
		petName: 'string',
		kind: 'string',
		procedures: ['string']
	  }
	]
   };
   */

const clinic = new VeterinaryClinic("SoftCare", 10);
console.log(
    clinic.newCustomer("Jim Jones", "Tom", "Cat", ["A154B", "2C32B", "12CDB"])
);
console.log(
    clinic.newCustomer("Anna Morgan", "Max", "Dog", ["SK456", "DFG45", "KS456"])
);
console.log(clinic.newCustomer("Jim Jones", "Tiny", "Cat", ["A154B"]));
console.log(clinic.onLeaving("Jim Jones", "Tiny"));
console.log(clinic.toString());
clinic.newCustomer("Jim Jones", "Sara", "Dog", ["A154B"]);
console.log(clinic.toString());
