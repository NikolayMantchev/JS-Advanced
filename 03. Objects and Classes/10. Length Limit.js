class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    increase(value) {
        this.innerLength += Number(value);
    }

    decrease(value) {
        this.innerLength -= value;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }

        return this.innerLength;
    }
    toString() {
        if (this.innerLength === 0) {
            return (this.innerLength = "...");
        }
        if (this.innerString.length > this.innerLength) {
            const charToCut = this.innerString.length - this.innerLength;
            const newStr = this.innerString.slice(0, charToCut).concat("...");

            return newStr;
        }
        return this.innerString;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString());
