import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const listado = pokemon;

listado.pokemon.forEach((element, index) => {

  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'contenedorPokemon');
  // img
  const newImg = document.createElement('img');
  newImg.setAttribute('src', listado.pokemon[index].img);
  newImg.setAttribute('class', 'imgPokemon');
  // name
  const newName = document.createTextNode(listado.pokemon[index].name);
  // numero
  const newNumber = document.createTextNode(listado.pokemon[index].num);

  newDiv.appendChild(newNumber);
  newDiv.appendChild(newImg);
  newDiv.appendChild(newName);

  const currentDiv = document.getElementById('contenedor');
  currentDiv.appendChild(newDiv);
});

const buscarPokemon = document.getElementById('botonBuscar');
buscarPokemon.addEventListener('click', (validacion) => {

  validacion.preventDefault();
  const pokemonBuscado = document.getElementById('buscador').value;
  console.log(pokemonBuscado); // guarda el valor ingresado
  const pokemonEncontrado = listado.pokemon.filter(pokemon => (pokemon.name === pokemonBuscado));
  console.log(pokemonEncontrado); // Esto trae toda la info del pokemon
  const soloTresPropiedades = pokemonEncontrado.map(pokemon => [[pokemon.num], [pokemon.img], [pokemon.name]]);
  console.log(soloTresPropiedades);
  //const nuevoDivEnPantalla;
});