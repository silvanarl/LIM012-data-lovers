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

export const typeFilter = (arr, property, condition) => {
  const filtrado = arr.filter(element => (element[property][0] === condition
  || element[property][1] === condition));
  return filtrado;
};

export const orderAZ = (arr, condition) => {
  let result;
  if (condition === 'a-z') {
    result = arr.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  } else {
    result = arr.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      return -1;
    });
  }
  return result;
};

export const orderMxCP = (arr, condition) => {
  let orden = [];
  if (condition === 'mayor-menor') {
    orden = arr.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
  } else if (condition === 'menor-mayor') {
    orden = arr.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
  }
  return orden;
};

// export const orderAZ = (arr, condition) => {
//   let result = [];
//   if (condition === 'a-z') {
//     result = arr.sort((a, b) => a.name - b.name);
//   } else if (condition === 'z-a') {
//     result = arr.sort((a, b) => b.name - a.name);
//   }
//   return result;
// };
