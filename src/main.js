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
  currentDiv.innerHTML = '';
  let newDiv = '';
  for (let i = 0; i < array.length; i++) {
    const num = array[i].num;
    const name = array[i].name;
    const img = array[i].img;
    newDiv += `
      <div class="contenedorPokemon">
      <a href="">
        <p class="enlace">${num}</p>
        <img class="imgPokemon" src="${img}">
        <p class="enlace">${name}</p></a>
      </div>
      `;
  }
  currentDiv.innerHTML = newDiv;
};
showPokemon(arrObj);
