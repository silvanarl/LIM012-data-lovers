import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

// Esta función muestra los Pokemon, recorriendo un array con un for, con
// la condicional de la longitud exacta del array. Luego crea un contenedor
// donde se insertarán: el elemento imagen y los nodos de texto num y name
// que fueron creados también, mediante el método appendchild() estos
// son agregados al contenedor de cada pokemon. Esta funcion puede ser reutilizada.
const currentDiv = document.getElementById('contenedor');
const showPokemon = (array) => {
  for (let i = 0; i < array.length; i++) {
    const num = array[i].num;
    const img = array[i].img;
    const name = array[i].name;
    const newDiv = `
      <li class = "contenedorPokemon">
      <a href="">
       <p> ${num} </p>
       <img class = "imgPokemon" src = ${img}>
      <p>${name}</p></a>
      </li>
    `;
    currentDiv.innerHTML += newDiv;
  }
};
showPokemon(arrObj);

// Esta función arroja coincidencias según el ingreso del usuario

const pokemonBuscado = document.getElementById('buscador');
const buscarPokemon = document.getElementById('botonBuscar');
const arrCoincidencias = [];

buscarPokemon.addEventListener('click', (event) => {
  event.preventDefault();

  const textoMin = pokemonBuscado.value.toLowerCase();
  for (let i = 0; i < arrObj.length; i += 1) {
    const pokemonMin = arrObj[i].name.toLowerCase();
    if (pokemonMin.indexOf(textoMin) !== -1) {
      arrCoincidencias.push(arrObj[i]);
    } else {
      // const textoAlerta = document.getElementById('textoAlerta');
      // textoAlerta.classList.remove('ocultar');
      // textoAlerta.textContent = "no hay coincidencias";
    }
    return arrCoincidencias;
  }
});