import Cat from './src/Cat';

test('Cat should meow', () => {
    const myCat = new Cat('Cat', 'Persian');
    expect(myCat.sound()).toBe('Cat meows');
});

test('Cat should not be wagging tail', () => {
    const myCat = new Cat('Cat', 'Persian');
    expect(myCat.wagTail()).toBe('Cat does not wag tail');
});
