/* Levando em consideração o array [6, 21, 9, 2, 50, 98, 1] crie uma função que 
mostra o maior numero da lista
 */

function maxNumber(arr) {
  let max = Number.MIN_VALUE;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }

  return max;
}

console.log(maxNumber([6, 21, 9, 2, 50, 98, 1]));
