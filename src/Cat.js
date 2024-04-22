import Animal from 'Animal';

export default class Cat extends Animal {
    constructor(name, breed) {
        super(name, 'Cat');
        this.breed = breed;
    }

    sound() {
        return `${this.name} meows`;
    }

    wagTail() {
        return `${this.name} does not wag tail`;
    }
}