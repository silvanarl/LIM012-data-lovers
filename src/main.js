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
  for (let i = 0; i < array.length; i++){

      let nombre = array[i].name;
      let numero = array[i].num;
      let imagen = array[i].img;

      let whiteDiv = `
      <div class="contenedorPokemon">
        <p>${numero}</p>
        <img class="imgPokemon" src="${imagen}">
        <p>${nombre}</p>
      </div>
      `
      currentDiv.innerHTML += whiteDiv;
  }
};

showPokemon(arrObj);

////

let pokemonBuscado = document.getElementById('buscador');
let buscarPokemon = document.getElementById('botonBuscar');
let arrCoincidencias = [];

///Esta función arroja coincidencias según el ingreso del usuario
buscarPokemon.addEventListener('click', (event) => {

  event.preventDefault();

  const coincidencias = (array) =>{

  let textoMin = pokemonBuscado.value.toLowerCase();

    for(let i = 0; i < array.length; i++){
      let pokemonMin = array[i].name.toLowerCase();
      if (pokemonMin.indexOf(textoMin) !== -1){
        arrCoincidencias.push(array[i]);
      }else{
        //const textoAlerta = document.getElementById('textoAlerta');
        //textoAlerta.classList.remove('ocultar');
        //textoAlerta.textContent = "no hay coincidencias";
      }
    }
    return arrCoincidencias;
  }
  console.log(coincidencias(arrObj));
  console.log(showPokemon(coincidencias(arrObj)));
});





