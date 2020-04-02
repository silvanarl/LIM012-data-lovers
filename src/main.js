import {
  coincidencias,
  typeFilter,
  orderAZ,
  orderZA,
  orderMxCP,
} from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

const currentDiv = document.getElementById('contenedor');
const pokedex = document.querySelector('#overlay');

// Pokedex

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

  const evolutions = elemento.evolution;
  const prevE = evolutions['prev-evolution'];
  const nextE = evolutions['next-evolution'];

  let evolutionPokemon = '';
  if (nextE === undefined && prevE === undefined) {
    evolutionPokemon += `
      <p class="">Este pokemon no tiene evolución</p>    
    `;
  }
  if (prevE !== undefined) {
    const prevPrevE = prevE[0]['prev-evolution'];
    if (prevPrevE !== undefined) {
      evolutionPokemon += `
      <div class="prevEvolution">
      <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${prevPrevE[0].num}.png"/>
      <p class="">${prevPrevE[0].name[0].toUpperCase()}${prevPrevE[0].name.substring(1)}</p>
      </div>
      `;
    }
    if (prevPrevE === undefined) {
      evolutionPokemon += `
      <div class="prevEvolution">
      <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png"/>
      <p class="">${elemento.name[0].toUpperCase()}${elemento.name.substring(1)}</p>
      </div>
      `;
    }
    evolutionPokemon += `
    <div class="prevEvolution">
    <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${prevE[0].num}.png"/>
    <p class="">${prevE[0].name[0].toUpperCase()}${prevE[0].name.substring(1)}</p>
    </div>
    `;
  }
  if (nextE !== undefined) {
    evolutionPokemon += `
    <div class="nextEvolution">
    <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${nextE[0].num}.png"/>
    <p class="">${nextE[0].name[0].toUpperCase()}${nextE[0].name.substring(1)}</p>
    </div>  
    `;
    const nextNextE = nextE[0]['next-evolution'];
    if (nextNextE !== undefined) {
      evolutionPokemon += `
      <div class="nextEvolution">
      <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${nextNextE[0].num}.png"/>
      <p class="">${nextNextE[0].name[0].toUpperCase()}${nextNextE[0].name.substring(1)}</p>
      </div>
      `;
    }
  }

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
            <p class="text1"> #${num} </p>
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
          <div class = "fiveRow">${evolutionPokemon}</div>
        </div>
    `;
  return infoPok;
};

// Mostrar pokemon

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

// Coincidencias

const buscarPokemon = document.getElementById('botonBuscar');
const msjAlerta = document.getElementById('msjAlerta');

buscarPokemon.addEventListener('click', (event) => {
  event.preventDefault();
  let pokemonBuscado = document.getElementById('buscador').value;
  if (pokemonBuscado !== '') {
    msjAlerta.innerHTML = '';
    currentDiv.innerHTML = '';
    showPokemon(coincidencias(arrObj, pokemonBuscado));
    pokemonBuscado = '';
  } else {
    msjAlerta.classList.remove('ocultar');
    msjAlerta.innerHTML = 'No se encontraron coincidencias';
    showPokemon(arrObj);
  }
});

// Filtro
const menuTipo = document.getElementById('selectType');
let tipoSeleccionado;
menuTipo.addEventListener('change', () => {
  tipoSeleccionado = menuTipo.value;
  showPokemon(typeFilter(arrObj, 'type', tipoSeleccionado));
});
// Orden AZ
const orderPokemonAZ = document.getElementById('orderPokemon');
orderPokemonAZ.addEventListener('change', () => {
  tipoSeleccionado = orderPokemonAZ.value;
  if (tipoSeleccionado === 'a-z') {
    showPokemon(orderAZ(arrObj));
  } else if (tipoSeleccionado === 'z-a') {
    showPokemon(orderZA(arrObj));
  }
});

const orderMaxPC = document.getElementById('maxPC');
orderMaxPC.addEventListener('change', () => {
  tipoSeleccionado = orderMaxPC.value;
  showPokemon(orderMxCP(arrObj, tipoSeleccionado));
});

// SET DE MOVIMIENTOS
// busqueda con menú desplegable

const listaSet = document.getElementById('listaSet');
const inputSet = document.getElementById('buscadorSet');
inputSet.addEventListener('keyup', (event) => {
  event.preventDefault();
  listaSet.setAttribute('class', 'mostrar2 listaSetPok');
  const pokemonSet = inputSet.value;
  if (pokemonSet !== '') {
    listaSet.innerHTML = '';
    showList(coincidencias(arrObj, pokemonSet));
  } else {
    listaSet.setAttribute('class', 'ocultar2');
  }
});

const showList = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    const namePok = array[i].name;
    const numPok = array[i].num;
    const onePokList = document.createElement('li');
    onePokList.setAttribute('data-search-num-pokemon', numPok);
    onePokList.setAttribute('class', 'cadaPok');
    onePokList.textContent = `
      ${namePok}
    `;
    listaSet.appendChild(onePokList);

    onePokList.addEventListener('click', (event) => {
      event.preventDefault();

      inputSet.value = '';

      const pokemonNameSet = document.querySelector('.pokemonNameSet');
      pokemonNameSet.innerHTML = `Evaluemos a ${namePok[0].toUpperCase()}${namePok.substring(1)}`;

      const filtrosQM = document.querySelector('#filtrosQM');
      const filtrosSA = document.querySelector('#filtrosSA');
      const quickMove = array[i]['quick-move'];
      const specialAttack = array[i]['special-attack'];

      let optionQM = `
        <p class="tituloSetMov">Quick Move</p>
        <select class="filter_type_Set">`;
      quickMove.forEach((element) => {
        optionQM += `<option value= "${element.name}">${element.name[0].toUpperCase()}${element.name.substring(1)}</option>`;
      });
      optionQM += '</select>';

      // const typeQM = element.type;
      // const baseDamage = element['base-damage'];
      // console.log(baseDamage);
      // const eps = element.energy / element['move-duration-seg'];
      // console.log(eps);

      let optionSA = `
        <p class="tituloSetMov">Special Attack</p>
        <select class="filter_type_Set">`;
      specialAttack.forEach((element) => {
        optionSA += `<option value= "${element.name}">${element.name[0].toUpperCase()}${element.name.substring(1)}</option>`;
        const specialAttackSelect = optionSA.value;
        console.log(specialAttackSelect);
      });
      optionSA += '</select>';

      // const specialAttackSelect = optionSA.value;
      // console.log(specialAttackSelect);
      // const typeSA = specialAttackSelect.type;
      // const baseDamage = element['base-damage'];
      // console.log(baseDamage);
      // console.log(typeSA);

      filtrosQM.innerHTML = optionQM;
      filtrosSA.innerHTML = optionSA;

      listaSet.setAttribute('class', 'ocultar2');
      listaSet.innerHTML = '';
    }, false);
  }
};
showList(arrObj);
