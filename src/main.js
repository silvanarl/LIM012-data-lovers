import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

const showPokemon = (array) => {
  for (let e = 0; e < array.length; e++) {
    if (e <= array.length - 1) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'contenedorPokemon');
      const newImg = document.createElement('img');
      newImg.setAttribute('src', array[e].img);
      newImg.setAttribute('class', 'imgPokemon');
      const newName = document.createTextNode(array[e].name);
      const newNumber = document.createTextNode(array[e].num);
      newDiv.appendChild(newNumber);
      newDiv.appendChild(newImg);
      newDiv.appendChild(newName);
      const currentDiv = document.getElementById('contenedor');
      currentDiv.appendChild(newDiv);
    }
  }
};
showPokemon(arrObj);


///

let pokemonBuscado = document.getElementById('buscador');
let buscarPokemon = document.getElementById('botonBuscar');
let resultadoBuscador = document.getElementById('resultados');


buscarPokemon.addEventListener('click', (validacion) => {

  validacion.preventDefault();
  const textoAlerta = document.getElementById('textoAlerta');

  let textoMin = pokemonBuscado.value.toLowerCase();

  for (let i = 0; i < arrObj.length; i++){
    let pokemonMin = arrObj[i].name.toLowerCase();
    if (pokemonMin.indexOf(textoMin) !== -1){
      resultadoBuscador.innerHTML += '<p>' + arrObj[i].name + '</p>'
    } else {
      resultadoBuscador.innerHTML = '';
      textoAlerta.textContent = "no hay coincidencias";
    }
  }
});
