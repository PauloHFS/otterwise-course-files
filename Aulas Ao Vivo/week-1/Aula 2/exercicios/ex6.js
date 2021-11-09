/*
Tendo como informação dois números, faça um programa que imprima na
tela qual deles é o MAIOR e qual deles é o menor. Caso os números sejam
iguais, informe que eles são iguais.
*/

const a = 1;
const b = 2;

let result = '';
if (a > b) {
  result += a + ' é o Maior, ' + b + ' é o Menor.';
} else if (a < b) {
  result += b + ' é o Maior, ' + a + ' é o Menor.';
} else {
  result += a + ' e ' + b + ' são iguai!';
}

console.log(result);
