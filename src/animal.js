export default class Animal {
    constructor(name, type, gender, age) {
        this.name = name;
        this.type = type;
        this.gender = gender;
        this.age = age;
    }

    sound() {
        return `${this.name} makes a sound`;
    }

    eat(food) {
        return `${this.name} eats ${food}`;
    }

    sleep() {
        return `${this.name} does not sleep`;
    }
}
