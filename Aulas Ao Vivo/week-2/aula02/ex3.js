/* 3 - Dado um array de nomes, faça um programa que imprima na tela todos os
nomes (na mesma linha). */

function printArr(arr) {
  let names = '';
  for (let index = 0; index < arr.length; index++) {
    if (index == arr.length - 1) {
      names += arr[index];
    } else {
      names += arr[index] + ', ';
    }
  }
  console.log(names);
}

printArr(['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']);
