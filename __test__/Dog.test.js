import Dog from '../src/Dog'

test('Dog should bark', () => {
    const myDog = new Dog('Rex', 'Rottweiler');
    expect(myDog.sound()).toBe('Rex barks');
});

test('Dog should wag its tail', () => {
    const myDog = new Dog('Rex', 'Rottweiler');
    expect(myDog.wagTail()).toBe('Rex wags tail');
});
