import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const listado = pokemon;
listado.pokemon.forEach((element, index)=>{
    let pokeImagen = document.createElement("img");
    pokeImagen.setAttribute("src", listado.pokemon[index].img);
    document.body.appendChild(pokeImagen);

    let bigDiv = document.getElementById("root");
    
});

