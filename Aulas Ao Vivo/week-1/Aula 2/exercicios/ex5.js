/*
Tendo como informações um nome e uma idade, faça um programa que
imprima no console se a pessoa é maior ou menor de idade.
*/
const nome = 'Paulo';
const idade = 21;

function isAdult(age) {
  return age > 18;
}

console.log(nome + ' é ' + (isAdult(idade) ? 'maior ' : 'menor ') + 'de idade');
