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

export const typeFilter = (arr, property, condition) => {
  const filtrado = arr.filter(element => (element[property][0] === condition
  || element[property][1] === condition));
  return filtrado;
};

export const anotherExample = () => {

};
