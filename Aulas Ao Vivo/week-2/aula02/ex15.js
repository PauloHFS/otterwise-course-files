/* Dado o array de objetos abaixo, faça um programa que calcule a média
aritmética dos estudantes e imprima no console os nomes dos estudantes
aprovados. A média de aprovação é 7.0. */

function average(arr) {
  let average = 0;
  for (let index = 0; index < arr.length; index++) {
    average += arr[index];
  }
  return average / arr.length;
}

const objs = [
  { nome: 'Marcos', notas: [10, 7, 2] },
  { nome: 'Michele', notas: [10, 10, 10] },
  { nome: 'Pedro', notas: [3, 10, 9] },
  { nome: 'Andressa', notas: [6, 6, 8] },
  { nome: 'Cristiana', notas: [7, 9, 2] },
];

for (let index = 0; index < objs.length; index++) {
  if (average(objs[index].notas) >= 7.0) {
    console.log(objs[index].nome);
  }
}
