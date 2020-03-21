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
    const img = array[i].img;
    const name = array[i].name;
    newDiv += `
    <div class = "contenedorPokemon">
      <a href="#" id="btnInfo">
       <p class ="enlace" > ${num} </p>
       <img class = "imgPokemon" src = ${img}>
      <p class ="enlace">${name}</p>
      </a>
    </div>
    `;
  }
  currentDiv.innerHTML = newDiv;
};
showPokemon(arrObj);

// Esta función arroja coincidencias según el ingreso del usuario

const pokemonBuscado = document.getElementById('buscador');
const buscarPokemon = document.getElementById('botonBuscar');
const arrCoincidencias = [];

const coincidencias = (array) => {
  const textoMin = pokemonBuscado.value.toLowerCase();
  for (let i = 0; i < array.length; i++) {
    const pokemonMin = array[i].name.toLowerCase();
    if (pokemonMin.indexOf(textoMin) !== -1) {
      arrCoincidencias.push(array[i]);
    } else {
    //   const textoAlerta = document.getElementById('textoAlerta');
    //   textoAlerta.classList.remove('ocultar');
    //   textoAlerta.textContent = 'no hay coincidencias';
    }
  }
  return arrCoincidencias;
};

buscarPokemon.addEventListener('click', (event) => {
  event.preventDefault();
  currentDiv.innerHTML = '';
  showPokemon(coincidencias(arrObj));
  pokemonBuscado.value = ''; //AGREGUÉ
});

// Mostrar la pokedex con la info del pokemon

const btnInfo = document.querySelector('#btnInfo');
const pokedex = document.querySelector('#overlay');

const showInfo = () => {
  let infoPok = '';

  //for (let i = 0; i < array.length; i++)
    // const num = array[i].num;
    // const img = array[i].img;
    // const name = array[i].name;
    // const height = array[i].size.height;
    // const weight = array[i].size.weight;
    // const generation = array[i].generation[name];
    // const type = array[i].type;
    // const maxCp = array[i].stats[max-cp];
    // const maxHp = array[i].stats[max-hp];
    // const resistant = array[i].resistant;
    // const weaknesses = array[i].weaknesses;
    // const evolution = array[i].evolution[i].next-evolution[name];

    infoPok += `
    <div class="pokedex" id="popup">
      <div class="pok_1"></div>
      <div class="pok_2"></div>
      <div class="pok_3">
        <div class="pok_3_1"></div>
        <div class="pok_3_2"></div>
      </div>
      <div class="pok_4"></div>
      <div class="info">HOLA</div>
    </div>
    `;
  pokedex.innerHTML = infoPok;
};
showInfo();

btnInfo.addEventListener('click', (event) => {

  event.preventDefault();
  //const popup = document.getElementById('popup');

  pokedex.classList.add('mostrar');
  showInfo();
});
