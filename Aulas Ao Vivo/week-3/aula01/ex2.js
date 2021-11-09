/* Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade, 
utilize os conhecimentos da aula para melhorar o código.

Exemplo Entrada:
{ name: ‘Juca’, idade: 28 }

Exemplo Saída:
Maior de idade
 */

const isMaiorIdade = ({ name, idade }) =>
  console.log(idade > 18 ? 'Maior de idade' : 'Menor de idade');

const user = { name: 'Juca', idade: 28 };
isMaiorIdade(user);
