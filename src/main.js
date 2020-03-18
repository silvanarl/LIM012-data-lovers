import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

// Esta función muestra los Pokemon, recorriendo un array con un for, con
// la condicional de la longitud exacta del array. Luego crea un contenedor
// donde se insertarán: el elemento imagen y los nodos de texto num y name
// que fueron creados también, mediante el método appendchild() estos
// son agregados al contenedor de cada pokemon. Esta funcion puede ser reutilizada.
const showPokemon = (array) => {
  for (let e = 0; e < array.length; e += 1) {
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

///Esta función arroja coincidencias según el ingreso del usuario

let pokemonBuscado = document.getElementById('buscador');
let buscarPokemon = document.getElementById('botonBuscar');
let arrCoincidencias = [];

buscarPokemon.addEventListener('click', (validacion) => {

  validacion.preventDefault();

  let textoMin = pokemonBuscado.value.toLowerCase();

  for(let i = 0; i < arrObj.length; i++){
    let pokemonMin = arrObj[i].name.toLowerCase();
    if (pokemonMin.indexOf(textoMin) !== -1){
      arrCoincidencias.push(arrObj[i]);
    }else{
      //const textoAlerta = document.getElementById('textoAlerta');
      //textoAlerta.classList.remove('ocultar');
      //textoAlerta.textContent = "no hay coincidencias";
    }
  }
  console.log(arrCoincidencias);
});

