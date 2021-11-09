/* Dado um array de números como entrada, faça um programa que
multiplique todos os valores por 10. */

function powerTen(arr) {
  for (let index = 0; index < arr.length; index++) {
    arr[index] *= 10;
  }
}

arr = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
powerTen(arr);
console.log(arr);
