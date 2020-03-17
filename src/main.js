import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

arrObj.forEach((e, i) => {
  // console.log('elementos', e);
  // console.log('indice', i);
  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'contenedorPokemon');
  // img
  const newImg = document.createElement('img');

  newImg.setAttribute('src', arrObj[i].img);
  newImg.setAttribute('class', 'imgPokemon');
  // name
  const newName = document.createTextNode(arrObj[i].name);
  // numero
  const newNumber = document.createTextNode(arrObj[i].num);

  newDiv.appendChild(newNumber);
  newDiv.appendChild(newImg);
  newDiv.appendChild(newName);

  const currentDiv = document.getElementById('contenedor');
  currentDiv.appendChild(newDiv);
});


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

