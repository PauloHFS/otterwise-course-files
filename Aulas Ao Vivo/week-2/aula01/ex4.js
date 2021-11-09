/* Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice.
	Exemplo entrada: [5, 9, 10, 6]
	Exemplo Saída: 47
 */
function powerSum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index] * index;
  }
  return sum;
}

const arr = [5, 9, 10, 6];

console.log(powerSum(arr));
