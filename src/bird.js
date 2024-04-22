import Animal from "./animal";

export default class Bird extends Animal {
    constructor(name, breed) {
        super(name, 'Bird');
        this.breed = breed;
    }

    sound() {
        return `${this.name} chirps`;
    }

    fly() {
        return `${this.name} flies high`;
    }
}