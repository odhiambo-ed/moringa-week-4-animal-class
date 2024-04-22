import Bird from './src/Bird';

test('Bird should chirp', () => {
    const myBird = new Bird('Kiwis', 'Accipitriformes');
    expect(myBird.sound()).toBe('Kiwis chirps');
});

test('Bird should fly', () => {
    const myBird = new Bird('Kiwis', 'Accipitriformes');
    expect(myBird.fly()).toBe('Kiwis flies high');
});
