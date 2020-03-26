import { coincidencias, typeFilter, orderAZ } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

const currentDiv = document.getElementById('contenedor');
const pokedex = document.querySelector('#overlay');

const showInfo = (elemento) => {
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
            <p class="text1"> ${name[0].toUpperCase()}${name.substring(1)} </p>
            <p class="text1"> ${num} </p>
          </div>
          <div class="secondRow">
            <img class = "imgPokInfo" src = ${img}>
            <div class="moreInfo">
              <div class="weight">
                <img class="icono" src = "img/weight.svg">
                <p class="text2"> ${weight} </p>
              </div>
              <div class="height">
                <img class="icono" src = "img/height.svg">
                <p class="text2"> ${height} </p>
              </div>
              <div class="generation">
                <img class="region" src = "img/pointer.svg">
                <span class="text2"> ${generation[0].toUpperCase()}${generation.substring(1)} </span>
              </div>
              <div class="type">         
                <div class="separar">${dividir(type)}</div>
              </div>
            </div>
          </div>
          <div class="thirdRow">
            <p class="text2">Máx</p>
            <img class="icono2" src = "img/glove.svg">
            <p class="text2"> ${maxCp} </p>
            <p class="text2">|</p>
            <img class="icono2" src = "img/heart.svg">
            <p class="text2"> ${maxHp} </p>
          </div>
          <div class="fourthRow">
            <div class="resistant">
              <p class="text2">Resistencia</p>
              <div class="separar">${dividir(resistant)}</div>
            </div>
            <div class="weaknesses">
              <p class="text2">Debilidad</p>
              <div class="separar">${dividir(weaknesses)}</div>
            </div>
          </div>
          <div class = "fiveRow">
            <div>
              <p></p>
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
      pokedex.appendChild(showInfo(array[i]));
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

// Funcion para filtrar por tipo, recibe 3 arg (data, propiedad y value seleccionado).
// const selectType = document.querySelector('#selectType');
// const tipoSeleccionado = selectType.value;

// selectType.addEventListener('change', () => {
//   showPokemon(typeFilter(arrObj, 'type', tipoSeleccionado));
// });

// // const ordenAZ = document.querySelector('#selectType');
// selectType.addEventListener('change', () => {
//   showPokemon(orderAZ(arrObj, 'name', tipoSeleccionado));
// });

// // cons cambiarSeleccion = document.querySelector('#selecOrder');
// const cambiarSeleccion = document.getElementById('selectOrder');
// const nuevoMenu = document.querySelector('#selectType');
// nuevoMenu.setAttribute('class', 'ocultar');

const orden1 = ['normal', 'electric', 'flying', 'poison', 'ground', 'rock',
  'bug', 'ghost', 'steel', 'firewater', 'grass', 'psychic', 'fighting', 'dragon',
  'ice', 'dragon', 'fairy', 'dark'];
const orden2 = ['a-z', 'z-a'];
const orden3 = ['mayor a menor', 'menor a mayor'];

const allOrders = [
  [],
  orden1,
  orden2,
  orden3,
];

const cambiaOrden = () => {
  // tomo el valor del select del pais elegido
  const select = document.formulario.select[document.formulario.select.selectedIndex].value;
  // miro a ver si el pais está definido
  if (select !== 0) {
    // si estaba definido, entonces coloco las opciones de la provincia correspondiente.
    // selecciono el array de provincia adecuado
    let mis_orders = allOrders[select];
    console.log(mis_orders);
    // calculo el numero de provincias
    let num_orders = mis_orders.length;
    // marco el número de provincias en el select
    document.formulario.otroSelect.length = num_orders;
    // para cada provincia del array, la introduzco en el select
    for (let i = 0; i < num_orders; i += 1) {
      console.log(i);
      document.formulario.otroSelect.options[i].value = mis_orders[i];
      document.formulario.otroSelect.options[i].text = mis_orders[i];
    }
  } else {
    // si no había provincia seleccionada, elimino las provincias del select
    document.formulario.otroSelect.length = 1;
    // coloco un guión en la única opción que he dejado
    document.formulario.otroSelect.options[0].value = '-';
    document.formulario.otroSelect.options[0].text = '-';
  }
  // marco como seleccionada la opción primera de provincia
  document.formulario.otroSelect.options[0].selected = true;
};
