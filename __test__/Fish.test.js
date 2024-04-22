import Fish from './src/Fish';

test('Fish should make bubbles', () => {
    const myFish = new Fish('Fish', 'Starfish');
    expect(myFish.sound()).toBe('Fish makes bubbles');
});

test('Fish should swim', () => {
    const myFish = new Fish('Fish', 'Starfish');
    expect(myFish.swim()).toBe('Fish swims');
});
