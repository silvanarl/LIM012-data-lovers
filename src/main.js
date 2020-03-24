import { coincidencias, arrFilter } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

// Esta función muestra los Pokemon, recorriendo un array con un for, con
// la condicional de la longitud exacta del array. Luego crea un contenedor
// donde se insertarán: el elemento imagen y los nodos de texto num y name
// que fueron creados también, mediante el método appendchild() estos
// son agregados al contenedor de cada pokemon. Esta funcion puede ser reutilizada.
const currentDiv = document.getElementById('contenedor');
const pokedex = document.querySelector('#overlay');

const showInfo2 = (elemento) => {
  const infoPok = document.createElement('div');
  infoPok.setAttribute('class', 'pokedex');
  const num = elemento.num;
  const img = elemento.img;
  const name = elemento.name;
  const weight = elemento.size.weight;
  const height = elemento.size.height;
  const generation = elemento.generation.name;
  const type = elemento.type;
  const maxCp = elemento.stats['max-cp'];
  const maxHp = elemento.stats['max-hp'];
  const resistant = elemento.resistant;
  const weaknesses = elemento.weaknesses;

  const dividir = (arr) => {
    let newDiv2 = '';
    for (let i = 0; i < arr.length; i += 1) {
      newDiv2 += `
        <span class="tipos pok_type_${arr[i]}">${arr[i]}</span>
      `;
    }
    return newDiv2;
  };
  infoPok.innerHTML = `
        <div class="pok_1"></div>
        <div class="pok_2"></div>
        <div class="pok_3">
          <div class="pok_3_1"></div>
          <div class="pok_3_2"></div>
        </div>
        <div class="pok_4">
          <button id="boton-exit"></button>
        </div>
        <div class="info">
          <div class="nameAndNum">
            <p class="text24"> ${name[0].toUpperCase()}${name.substring(1)} </p>
            <p class="text24"> ${num} </p>
          </div>
          <div class="secondRow">
            <img class = "imgPokInfo" src = ${img}>
            <div class="moreInfo">
              <div class="weight">
                <img class="icono" src = "img/weight.svg">
                <p class="text18"> ${weight} </p>
              </div>
              <div class="height">
                <img class="icono" src = "img/height.svg">
                <p class="text18"> ${height} </p>
              </div>
              <div class="generation">
                <img class="region" src = "img/pointer.svg">
                <span class="text18"> ${generation[0].toUpperCase()}${generation.substring(1)} </span>
              </div>
              <div class="type">         
                <div class="separar">${dividir(type)}</div>
              </div>
            </div>
          </div>
          <div class="thirdRow">
            <p class="text18">Máx</p>
            <img src = "img/glove.svg">
            <p class="text18"> ${maxCp} </p>
            <img src = "img/heart.svg">
            <p class="text18"> ${maxHp} </p>
          </div>
          <div class="fourthRow">
            <div class="resistant">
              <p class="text18">Resistencia</p>
              <div class="separar">${dividir(resistant)}</div>
            </div>
            <div class="weaknesses">
              <p class="text18">Debilidad</p>
              <div class="separar">${dividir(weaknesses)}</div>
            </div>
          </div>
        </div>
    `;
  return infoPok;
};

const showPokemon = (array) => {
  currentDiv.innerHTML = '';
  for (let i = 0; i < array.length; i += 1) {
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'contenedorPokemon');
    const num = array[i].num;
    const img = array[i].img;
    const name = array[i].name;
    divElement.innerHTML = `
      <a href="#" id="btnInfo">
       <p class ="enlace" > ${num} </p>
       <img class = "imgPokemon" src = ${img}>
      <p class ="enlace">${name[0].toUpperCase()}${name.substring(1)}</p>
      </a>
    `;
    divElement.addEventListener('click', (event) => {
      event.preventDefault();
      pokedex.classList.add('mostrar');
      pokedex.appendChild(showInfo2(array[i]));
      const botonExit = document.getElementById('boton-exit');
      botonExit.addEventListener('click', () => {
        pokedex.innerHTML = '';
        pokedex.classList.remove('mostrar');
      });
    });
    currentDiv.appendChild(divElement);
  }
};
showPokemon(arrObj);

const buscarPokemon = document.getElementById('botonBuscar');

buscarPokemon.addEventListener('click', (event) => {
  event.preventDefault();
  let pokemonBuscado = document.getElementById('buscador').value;
  if (pokemonBuscado !== '') {
    currentDiv.innerHTML = '';
    showPokemon(coincidencias(arrObj, pokemonBuscado));
    pokemonBuscado = '';
  } else {
    currentDiv.innerHTML = 'No se encontraron coincidencias';
  }
});

// const selectType = document.getElementsById('selectType');
// selectType.addEventListener('change', () => {
//   const valueSelect = selectType.value;
//   if (valueSelect !== '') {
//     currentDiv.innerHTML = showPokemon(arrFilter(arrObj, valueSelect));
//   }
// });
