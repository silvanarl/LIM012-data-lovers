import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const listado = pokemon;
console.log(listado.pokemon[1].name);
console.log(listado.pokemon[1].type);

document.body.onload = addElement;

function addElement(){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'contenedorPokemon')
    //newDiv.classList.add('contenedorPokemon');

    const newContent = document.createTextNode('Hola de nuevo');
    newDiv.appendChild(newContent);

    let currentDiv = document.getElementById('contenedor');
    currentDiv.appendChild(newDiv);
}

