/* [REFATORAÇÃO] Dado um array de números, faça um programa que
imprima na tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que também
imprima os números negativos, os pares, os ímpares e realize a contagem de
cada um deles.
Os valores de entrada serão:
Array;
Exemplo de Entrada:
[1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
-----------------
[-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ] */

let numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

console.log(
  'Positivos na array: ',
  numbers.filter(value => value > 0)
);

console.log(
  'Nagativos na array: ',
  numbers.filter(value => value < 0)
);

console.log(
  'Pares na array: ',
  numbers.filter(value => value % 2 == 0)
);

console.log(
  'Impares na array: ',
  numbers.filter(value => value % 2 != 0)
);

console.log(
  numbers.reduce((contadores, value) => {
    contadores[value] = (contadores[value] || 0) + 1;
    return contadores;
  }, {})
);
