/* [REFATORAÇÃO] Dado um array de números, faça um programa que imprima
na tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que também
imprima os números negativos, os pares, os ímpares e realize a contagem de
cada um deles. */

const getEvens = array => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) console.log(array[index]);
  }
};

getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]);
