import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

function agregarPokemon(e, i, array){

  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'contenedorPokemon');
  // img
  const newImg = document.createElement('img');
  newImg.setAttribute('src', array[i].img);
  newImg.setAttribute('class', 'imgPokemon');
  // name
  const newName = document.createTextNode(array[i].name);
  // numero
  const newNumber = document.createTextNode(array[i].num);

  newDiv.appendChild(newNumber);
  newDiv.appendChild(newImg);
  newDiv.appendChild(newName);

  const currentDiv = document.getElementById('contenedor');
  currentDiv.appendChild(newDiv);
}

arrObj.forEach(agregarPokemon);
