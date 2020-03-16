import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const listado = pokemon;
//console.log(listado.pokemon[1].name);
//console.log(listado.pokemon[1].type);

listado.pokemon.forEach((element, index)=>{

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'contenedorPokemon');

    // img
    const newImg = document.createElement('img');
    newImg.setAttribute("src", listado.pokemon[index].img);
    newImg.setAttribute('class', 'imgPokemon');

    //name
    const newName = document.createTextNode(listado.pokemon[index].name);

    //numero
    const newNumber = document.createTextNode(listado.pokemon[index].num);

    newDiv.appendChild(newNumber);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newName);
    
  const currentDiv = document.getElementById('contenedor');
  currentDiv.appendChild(newDiv);
});

//


const btnBuscar = document.getElementById('botonBuscar');

btnBuscar.addEventListener('click',(validacion)=>{

  validacion.preventDefault();

  const nombrePokemon = document.getElementById('buscador').value;
  console.log(nombrePokemon);

  console.log(pokemon.name === nombrePokemon);
  
});