class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return "0x" + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        this.value += number;
        return this;
    }

    minus(number) {
        this.value -= number;
        return this;
    }

    parse(string) {
        return parseInt(string);
    }
}
// 80/100
