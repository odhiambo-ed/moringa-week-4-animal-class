import Animal from './Animal';

export default class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    sound() {
        return `${this.name} barks`;
    }

    wagTail() {
        return `${this.name} wags tail`;
    }
}