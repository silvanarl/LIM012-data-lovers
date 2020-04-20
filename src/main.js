import {
  coincidences,
  filterByType,
  orderAZ,
  orderZA,
  orderByMxCP,
  rounded,
} from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

const currentDiv = document.getElementById('mainContainer');
const pokedex = document.querySelector('#overlay');

const resetSearch = document.getElementById('resetSearch');

// Mostra la info de cada pokemón - Pokedex

const showInfo = (element) => {
  const infoPok = document.createElement('div');
  infoPok.setAttribute('class', 'pokedex');
  const num = element.num;
  const img = element.img;
  const name = element.name;
  const weight = element.size.weight;
  const height = element.size.height;
  const generation = element.generation.name;
  const type = element.type;
  const maxCp = element.stats['max-cp'];
  const maxHp = element.stats['max-hp'];
  const resistant = element.resistant;
  const weaknesses = element.weaknesses;
  const divide = (arr) => {
    let newDiv = '';
    for (let i = 0; i < arr.length; i += 1) {
      newDiv += `
        <span class="allTypes pok_type_${arr[i]}">${arr[i]}</span>
      `;
    }
    return newDiv;
  };

  const evolutions = element.evolution;
  const prevE = evolutions['prev-evolution'];
  const nextE = evolutions['next-evolution'];

  let prevEvolutionPokemon = '';
  let nextEvolutionPokemon = '';
  if (prevE !== undefined) {
    const prevPrevE = prevE[0]['prev-evolution'];
    if (prevPrevE !== undefined) {
      prevEvolutionPokemon += `
      <div class="evolutionPok">
      <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${prevPrevE[0].num}.png"/>
      <p class="">${prevPrevE[0].name[0].toUpperCase()}${prevPrevE[0].name.substring(1)}</p>
      </div>
      <div class = "triangle"></div>
      `;
    }
    prevEvolutionPokemon += `
    <div class="evolutionPok">
    <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${prevE[0].num}.png"/>
    <p class="">${prevE[0].name[0].toUpperCase()}${prevE[0].name.substring(1)}</p>
    </div>
    `;
  }
  if (nextE !== undefined) {
    nextEvolutionPokemon += `
    <div class="evolutionPok">
    <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${nextE[0].num}.png"/>
    <p class="">${nextE[0].name[0].toUpperCase()}${nextE[0].name.substring(1)}</p>
    </div>
    `;
    const nextNextE = nextE[0]['next-evolution'];
    if (nextNextE !== undefined) {
      nextEvolutionPokemon += `
      <div class="evolutionPok">
      <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${nextNextE[0].num}.png"/>
      <p class="">${nextNextE[0].name[0].toUpperCase()}${nextNextE[0].name.substring(1)}</p>
      </div>
      `;
    }
  }

  infoPok.innerHTML = `
        <div class="modal_1"></div>
        <div class="modal_2"></div>
        <div class="modal_3">
          <div class="modal_3_1"></div>
          <div class="modal_3_2"></div>
        </div>
        <div class="modal_4">
          <button id="btn-exit"></button>
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
                <img class="icon" src = "img/weight.svg">
                <p class="text2"> ${weight} </p>
              </div>
              <div class="height">
                <img class="icon" src = "img/height.svg">
                <p class="text2"> ${height} </p>
              </div>
              <div class="generation">
                <img class="region" src = "img/pointer.svg">
                <span class="text2"> ${generation[0].toUpperCase()}${generation.substring(1)} </span>
              </div>
              <div class="type">         
                <div class="toSeparate">${divide(type)}</div>
              </div>
            </div>
          </div>
          <div class="thirdRow">
            <p class="text2">Max</p>
            <img class="icon2" src = "img/glove.svg">
            <p class="text2"> ${maxCp} </p>
            <p class="text2">|</p>
            <img class="icon2" src = "img/heart.svg">
            <p class="text2"> ${maxHp} </p>
          </div>
          <div class="fourthRow">
            <div class="resistant">
              <p class="text2">Resistant</p>
              <div class="toSeparate">${divide(resistant)}</div>
            </div>
            <div class="weaknesses">
              <p class="text2">Weaknesses</p>
              <div class="toSeparate">${divide(weaknesses)}</div>
            </div>
          </div>
          <div class = "fifthRow">
            <div class="evolutionAlign">${prevEvolutionPokemon}</div>
            <div class="evolutionPok">
              <img class="imgEvolution" src="https://www.serebii.net/pokemongo/pokemon/${element.num}.png"/>
              <p class="">${element.name[0].toUpperCase()}${element.name.substring(1)}</p>
            </div>
            <div class="evolutionAlign">${nextEvolutionPokemon}</div>
          </div>
        </div>
    `;
  return infoPok;
};

// Mostrar los 251 pokemon

const showPokemon = (array) => {
  currentDiv.innerHTML = '';
  for (let i = 0; i < array.length; i += 1) {
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'eachPokemon');
    const num = array[i].num;
    const img = array[i].img;
    const name = array[i].name;
    divElement.innerHTML = `
      <a href="#" id="btnInfo">
      <p class ="text3" > ${num} </p>
      <img class = "imgPokemon" src = ${img}>
      <p class ="text3">${name[0].toUpperCase()}${name.substring(1)}</p>
      </a>
    `;
    divElement.addEventListener('click', (event) => {
      event.preventDefault();
      pokedex.classList.add('show');
      pokedex.appendChild(showInfo(array[i]));
      const btnExit = document.getElementById('btn-exit');
      btnExit.addEventListener('click', () => {
        pokedex.innerHTML = '';
        pokedex.classList.remove('show');
      });
    });
    currentDiv.appendChild(divElement);
  }
};
showPokemon(arrObj);

// Mostrar las coincidencias de la búsqueda

const btnSearch = document.getElementById('searchButton');
const messageAlert = document.getElementById('messageAlert');
const searchPok = document.getElementById('search');

btnSearch.addEventListener('click', (event) => {
  event.preventDefault();
  let foundPokemon = searchPok.value;
  if (foundPokemon !== '') {
    messageAlert.innerHTML = '';
    currentDiv.innerHTML = '';
    showPokemon(coincidences(arrObj, foundPokemon));
    foundPokemon = '';
  } else {
    messageAlert.classList.remove('hide');
    showPokemon(arrObj);
  }
});

// Nueva búsqueda
resetSearch.addEventListener('click', (event) => {
  event.preventDefault();
  searchPok.value = '';
  showPokemon(arrObj);
});

// Filtrar pokemon según su tipo

const typeMenu = document.getElementById('selectType');
let typeSelected;
typeMenu.addEventListener('change', () => {
  typeSelected = typeMenu.value;
  showPokemon(filterByType(arrObj, 'type', typeSelected));
});

// Orden AZ
const orderPokemonAZ = document.getElementById('orderByNamePokemon');
orderPokemonAZ.addEventListener('change', () => {
  typeSelected = orderPokemonAZ.value;
  if (typeSelected === 'a-z') {
    showPokemon(orderAZ(arrObj));
  } else if (typeSelected === 'z-a') {
    showPokemon(orderZA(arrObj));
  }
});

const orderMaxPC = document.getElementById('orderByMaxPC');
orderMaxPC.addEventListener('change', () => {
  typeSelected = orderMaxPC.value;
  showPokemon(orderByMxCP(arrObj, typeSelected));
});

// Set de movimientos

const pokemonListForMoveSet = document.getElementById('pokemonListForMoveSet');
const inputSet = document.getElementById('searchBoxForMoveSet');

const showList = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    const namePok = array[i].name;
    const typePok = array[i].type;
    const onePokList = document.createElement('li');
    onePokList.setAttribute('value', namePok);
    onePokList.setAttribute('class', 'eachPokSetMov');
    onePokList.textContent = `
      ${namePok}
    `;
    pokemonListForMoveSet.appendChild(onePokList);

    onePokList.addEventListener('click', (event) => {
      event.preventDefault();
      inputSet.value = '';
      const pokemonNameSet = document.querySelector('.pokemonNameSet');
      pokemonNameSet.innerHTML = `Let's test ${namePok[0].toUpperCase()}${namePok.substring(1)}`;
      pokemonNameSet.classList.add('namePok');

      const selectQM = document.querySelector('#selectQM');
      const selectSA = document.querySelector('#selectSA');

      const quickMove = array[i]['quick-move'];
      quickMove.forEach((element) => {
        selectQM.innerHTML += `
        <option value= "${element.name}">${element.name[0].toUpperCase()}${element.name.substring(1)}</option>
        `;
      });
      const specialAttack = array[i]['special-attack'];
      specialAttack.forEach((element) => {
        selectSA.innerHTML += `
        <option value= "${element.name}">${element.name[0].toUpperCase()}${element.name.substring(1)}</option>
        `;
      });

      // Botón GO
      const btnGo = document.getElementById('btnCal');

      btnGo.addEventListener('click', (e) => {
        e.preventDefault();
        const arrQM = quickMove.filter(element => selectQM.value === element.name);
        const arrSA = specialAttack.filter(element => selectSA.value === element.name);

        // Valores de Quick Move
        const baseDamageQM = parseInt(arrQM[i]['base-damage'], 10);
        const energyQM = parseInt(arrQM[i].energy, 10);
        const timeQM = parseFloat(arrQM[i]['move-duration-seg']);
        let dps;
        const eps = parseFloat(energyQM / timeQM);

        // Valores de Special Attack
        const baseDamageSA = parseInt((arrSA[i]['base-damage']), 10);
        const energySA = parseInt((arrSA[i].energy), 10);
        const timeSA = parseFloat(arrSA[i]['move-duration-seg']);
        const powerBar = energySA * -1 / eps;

        //
        const timeBattleSeg = (30 / (powerBar + timeSA));

        // Mostrar resultado
        const result = document.getElementById('result');
        result.innerHTML = '';

        // Comparaciones
        if ((arrQM[i].type === typePok[0] || arrQM[i].type === typePok[1])
        && (arrSA[i].type === typePok[0] || arrSA[i].type === typePok[1])) {
          //
          dps = ((baseDamageQM * 1.2) / timeQM);
          const totalBaseDamage = parseInt((baseDamageSA * 1.2), 10);
          const setMove = rounded((((dps * powerBar) + totalBaseDamage) * timeBattleSeg), 2);
          result.innerHTML = setMove;
          //
        } else if ((arrQM[i].type !== typePok[0] || arrQM[i].type !== typePok[1])
        && (arrSA[i].type === typePok[0] || arrSA[i].type === typePok[1])) {
          //
          dps = (baseDamageQM / timeQM);
          const totalBaseDamage = parseInt((baseDamageSA * 1.2), 10);
          const setMove = rounded((((dps * powerBar) + totalBaseDamage) * timeBattleSeg), 2);
          result.innerHTML = setMove;
          //
        } else if ((arrQM[i].type === typePok[0] || arrQM[i].type === typePok[1])
        && (arrSA[i].type !== typePok[0] || arrSA[i].type !== typePok[1])) {
          //
          dps = ((baseDamageQM * 1.2) / timeQM);
          const totalBaseDamage = parseInt((baseDamageSA), 10);
          const setMove = rounded((((dps * powerBar) + totalBaseDamage) * timeBattleSeg), 2);
          result.innerHTML = setMove;
          //
        } else if ((arrQM[i].type !== typePok[0] || arrQM[i].type !== typePok[1])
        && (arrSA[i].type !== typePok[0] || arrSA[i].type !== typePok[1])) {
          //
          dps = (baseDamageQM / timeQM);
          const totalBaseDamage = parseInt((baseDamageSA), 10);
          const setMove = rounded((((dps * powerBar) + totalBaseDamage) * timeBattleSeg), 2);
          result.innerHTML = setMove;
          //
        }
        selectQM.innerHTML = `
        <option>Quick Move</option>
        `;
        selectSA.innerHTML = `
        <option>Special Attack</option>
        `;
      });

      pokemonListForMoveSet.setAttribute('class', 'hide2');
      pokemonListForMoveSet.innerHTML = '';
    });
  }
};
showList(arrObj);

// Búsqueda del pokemón para el set de movimientos

inputSet.addEventListener('keyup', (event) => {
  event.preventDefault();
  pokemonListForMoveSet.setAttribute('class', 'show2 listSetPok');
  const pokemonSet = inputSet.value;
  if (pokemonSet !== '') {
    pokemonListForMoveSet.innerHTML = '';
    showList(coincidences(arrObj, pokemonSet));
  } else {
    pokemonListForMoveSet.setAttribute('class', 'hide2');
  }
});
