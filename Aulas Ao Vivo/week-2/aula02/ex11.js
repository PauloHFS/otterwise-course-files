/* Crie um algoritmo que tem como entrada um array de notas, e imprime no
console a média aritmética dessas notas. */

function average(arr) {
  let average = 0;
  for (let index = 0; index < arr.length; index++) {
    average += arr[index];
  }
  return average / arr.length;
}

console.log(average([6, 8, 7]));
