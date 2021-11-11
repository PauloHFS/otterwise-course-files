/* [REFATORAÇÃO] Dado um array de números, faça um programa que encontre
o menor elemento deste array e sua posição. Mostre as informações
encontradas no console.
OBS: Para melhorar a resolução desse problema, monte um programa que
também consegue retornar qual o maior valor e qual a sua posição. */

const minMax = array => {
  let result = {
    min: {
      index: -1,
      value: Number.MAX_VALUE,
    },
    max: {
      index: -1,
      value: Number.MIN_VALUE,
    },
  };

  for (let index = 0; index < array.length; index++) {
    if (array[index] > result.max.value) {
      result.max.index = index;
      result.max.value = array[index];
    }
    if (array[index] < result.min.value) {
      result.min.index = index;
      result.min.value = array[index];
    }
  }

  return result;
};

console.table(minMax([1, 2, 3, 4, 5, 6, 7]));
