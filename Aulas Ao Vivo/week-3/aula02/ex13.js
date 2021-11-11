/* Faça um programa que recebe um array e uma função como parâmetro e
percorre todo o array aplicando a função em cada um dos elementos do array. */

const map = (array, callback) => {
  let newArray = [];

  if (typeof callback == 'function') {
    for (let index = 0; index < array.length; index++) {
      newArray.push(callback(array[index]));
    }
  }

  return newArray;
};

console.log(map([1, 2, 3, 4], value => value * 10));
