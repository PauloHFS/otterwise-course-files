/* Escreva um programa que receba como entrada dois valores. Após, o
programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
indicando se os valores recebidos como entrada são múltiplos entre si. */

function isMultiple(number1, number2) {
  return number1 % number2 == 0 || number2 % number1 == 0;
}

console.log(isMultiple(2, 4));
