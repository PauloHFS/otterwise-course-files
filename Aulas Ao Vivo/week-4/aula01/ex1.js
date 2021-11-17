/* [REFATORAÇÃO] Dado um array de nomes, faça um programa que imprima
na tela todos os nomes (na mesma linha).
Os valores de entrada serão:
Array;

Exemplo de Entrada:
['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']

Exemplo de Saída:
Angela, Rosa, Ticiana, Carla, Renata */

let names = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'];

console.log(
  names.reduce((result, nome, index, array) => {
    return `${result}, ${nome}${index == array.length - 1 ? '.' : ''}`;
  })
);
