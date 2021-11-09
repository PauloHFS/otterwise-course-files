/* Dado um array de números, faça um programa que encontre o menor
elemento deste array e sua posição. Mostre as informações encontradas no
console. */

function findMin(arr) {
  let min = Number.MAX_VALUE;
  let indexOfMin = -1;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      indexOfMin = index;
      min = arr[index];
    }
  }
  return { index: indexOfMin, min: min };
}

console.table(findMin([1, 2, 3, 4, -5, 6, 7, 8, 9, 10]));
