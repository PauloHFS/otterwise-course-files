/* Escreva um programa que receba como entrada três números que serão
armazenados nas variáveis valueOne, valueTwo e valueThree respectivamente.
Tendo esses valores, mostre-os na tela na ordem em que estão armazenados.
Após ter mostrado faça trocas em que ao final valueTwo assuma o valor de
valueThree, valueThree assuma o valor de valueOne e valueOne assuma o valor
de valueTwo. Mostre ao final os valores atualizados. */

let valueOne = 1,
  valueTwo = 2,
  valueThree = 3;

console.log(valueOne, valueTwo, valueThree); // 1 2 3

valueOne += valueTwo; // 3 2 3
valueTwo = valueOne - valueTwo; // 3 1 3
valueOne -= valueTwo; // 2 1 3

valueTwo += valueThree; // 2 4 3
valueThree = valueTwo - valueThree; // 2 4 1
valueTwo -= valueThree; // 2 3 1

console.log(valueOne, valueTwo, valueThree); // 2 3 1
