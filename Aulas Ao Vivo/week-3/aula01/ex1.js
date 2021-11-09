/* Crie uma função que recebe uma string (com quatro possibilidades: “soma”, “subtrai”, “dividi”, “multiplica”) e dois números. A função deve retornar a operação realizada informada pela string nos dois números.

Exemplo Entrada:
myFunction(‘soma’)(3)(5)

Exemplo Saída:
8
 */

const myFunction = operador => {
  switch (operador) {
    case 'soma':
      return a => b => a + b;
    case 'subtrai':
      return a => b => a - b;
    case 'multiplica':
      return a => b => a * b;
    case 'dividi':
      return a => b => a / b;
  }
};

console.log(myFunction('soma')(3)(5));
console.log(myFunction('subtrai')(3)(5));
console.log(myFunction('multiplica')(3)(5));
console.log(myFunction('dividi')(3)(5));
