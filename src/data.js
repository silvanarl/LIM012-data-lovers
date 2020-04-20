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

export const filterByType = (arr, property, condition) => {
  const resultFilterByType = arr.filter(element => (element[property][0] === condition
  || element[property][1] === condition));
  return resultFilterByType;
};

export const orderAZ = (arr) => {
  const resultOrderForAZ = arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  return resultOrderForAZ;
};

export const orderZA = (arr) => {
  const resultOrderForZA = arr.sort((a, b) => (a.name > b.name ? -1 : 1));
  return resultOrderForZA;
};

export const orderByMxCP = (arr, condition) => {
  let resultOrderByMaxCP = [];
  if (condition === 'high-low') {
    resultOrderByMaxCP = arr.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
  }
  if (condition === 'low-high') {
    resultOrderByMaxCP = arr.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
  }
  return resultOrderByMaxCP;
};

export const redondeo = (value, places) => {
  const power = 10 ** places;
  return Math.round(value * power) / power;
};
