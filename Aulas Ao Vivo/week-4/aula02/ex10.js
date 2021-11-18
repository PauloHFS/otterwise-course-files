/* Escreva um programa para encontrar os elementos comuns entre dois
arrays
Exemplo de Entrada:
[1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
[-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255 ] 
Exemplo de Saída:
[22, -19, 13]
*/

let arr1 = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];
let arr2 = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255];

// reduzir para uma array com os comuns a ambas = reduce

let arr_comuns = arr1.reduce((acc, numero) => {
  const newAcc = [...acc];
  if (arr2.some(value => value === numero)) newAcc.push(numero);
  return newAcc;
}, []);

console.log(arr_comuns);
