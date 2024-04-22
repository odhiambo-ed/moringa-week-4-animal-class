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
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', 'tonight'], ' ');

    return element;
}

document.body.appendChild(component());