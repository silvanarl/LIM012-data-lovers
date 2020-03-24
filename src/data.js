export const coincidencias = (array, string) => {
  const arrCoincidencias = [];
  for (let i = 0; i < array.length; i += 1) {
    const pokemonMin = array[i].name.toLowerCase();
    const pokemonNum = array[i].num;
    if (pokemonMin.startsWith(string)) {
      arrCoincidencias.push(array[i]);
    } else if (pokemonNum.startsWith(string)) {
      arrCoincidencias.push(array[i]);
    }
  }
  return arrCoincidencias;
};

export const arrFilter = (array, condition) => {
  const pokemonFiltrado = [];
  for (let i = 0; i < array.length; i += 1) {
    const tipoDePokemon = array[i].type;
    if (tipoDePokemon.indexOf(condition) !== -1) {
      pokemonFiltrado.push(array[i]);
      console.log(pokemonFiltrado);
    }
  }
  return pokemonFiltrado;
};

export const anotherExample = () => 'OMG';
