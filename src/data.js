export const coincidencias = (array, string) => {
  const arrCoincidencias = [];
  for (let i = 0; i < array.length; i += 1) {
    const pokemonMin = array[i].name.toLowerCase();
    const pokemonNum = array[i].num;
    if (pokemonMin.startsWith(string.toLowerCase())) {
      arrCoincidencias.push(array[i]);
    } else if (pokemonNum.indexOf(string) !== -1) {
      arrCoincidencias.push(array[i]);
    }
  }
  return arrCoincidencias;
};
// podria hacerse un else con algo como que si pokmin o
// poknum no estan en la data o son undefined retorne false, y dar msj error.

export const typeFilter = (arr, property, condition) => {
  const filtrado = arr.filter(element => (element[property][0] === condition
  || element[property][1] === condition));
  return filtrado;
};

export const orderAZ = (arr) => {
  const resultAZ = arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  return resultAZ;
};

export const orderZA = (arr) => {
  const resultZA = arr.sort((a, b) => (a.name > b.name ? -1 : 1));
  return resultZA;
};

export const orderMxCP = (arr, condition) => {
  let orden = [];
  if (condition === 'mayor-menor') {
    orden = arr.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
  }
  if (condition === 'menor-mayor') {
    orden = arr.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
  }
  return orden;
};
