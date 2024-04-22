import Animal from "Animal";

export default class Fish extends Animal {
    constructor(name, breed) {
        super(name, 'Fish');
        this.breed = breed;
    }

    sound() {
        return `${this.name} makes bubbles`;
    }

    swim() {
        `return ${this.name} swims`;
    }
}