/* Dado um array de números, faça um programa que imprima na tela somente
os números positivos. */

function printEvens(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 == 0) {
      console.log(element);
    }
  }
}

printEvens([1, 2, 3, 4, 5, 6, 7]);
