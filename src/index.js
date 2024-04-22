import _ from 'lodash';
import './style.css';
import Bird from './bird';
import Cat from './Cat';
import Dog from './Dog';
import Fish from './Fish';

const myDog = new Dog('Rex', 'Rottweiler');
const myCat = new Cat('Cat', 'Persian');
const myBird = new Bird('Kiwis', 'Accipitriformes');
const myFish = new Fish('Fish', 'Starfish');

function component() {
    const container = document.createElement('div');
    container.classList.add('container');

    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card', 'mt-3');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Display results of Animal methods
    const dogResult = document.createElement('p');
    dogResult.textContent = `Dog: ${myDog.sound()}, ${myDog.wagTail()}`;
    cardBody.appendChild(dogResult);

    const catResult = document.createElement('p');
    catResult.textContent = `Cat: ${myCat.sound()}, ${myCat.wagTail()}`;
    cardBody.appendChild(catResult);

    const birdResult = document.createElement('p');
    birdResult.textContent = `Bird: ${myBird.sound()}, ${myBird.fly()}`;
    cardBody.appendChild(birdResult);

    const fishResult = document.createElement('p');
    fishResult.textContent = `Fish: ${myFish.sound()}, ${myFish.swim()}`;
    cardBody.appendChild(fishResult);

    // Append elements
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
    container.appendChild(row);

    return container;
}


document.body.appendChild(component());