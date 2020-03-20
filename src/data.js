// estas funciones son de ejemplo

export const coincidencias = (array, string) => {
  const arrCoincidencias = [];
  for (let i = 0; i < array.length; i++) {
    const pokemonMin = array[i].name.toLowerCase();
    if (pokemonMin.startsWith(string)) {
      arrCoincidencias.push(array[i]);
    }
  }
  return arrCoincidencias;
};

export const anotherExample = () => 'OMG';
