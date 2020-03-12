import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemon = data;


document.body.onload = addElement;

function addElement(){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'contenedorPokemon')
    //newDiv.classList.add('contenedorPokemon');

    const newContent = document.createTextNode(pokemon.pokemon[1].img);
    newDiv.appendChild(newContent);

    let currentDiv = document.getElementById('contenedor');
    currentDiv.appendChild(newDiv);
}
console.log(pokemon.pokemon[1].name);
