/*
Crie uma função chamada calculate que possui três parâmetros. O primeiro
é uma string e os outros dois, números. A string será uma das seguintes opções:
"soma", "subtrai", "multiplica", "divide". A função calculate deve retornar o
resultado da operação (definida pela string) entre os dois números.
*/

/* function calculate(operation, number1, number2) {
  operations = {
    soma: (a, b) => a + b,
    subtrai: (a, b) => a - b,
    multiplica: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
  return operations[operation](number1, number2);
} */

function calculate(operation, number1, number2) {
  switch (operation) {
    case 'soma':
      operation = '+';
      break;
    case 'subtrai':
      operation = '-';
      break;
    case 'multiplica':
      operation = '*';
      break;
    case 'divide':
      operation = '/';
      break;
  }
  return eval(number1 + operation + number2);
}

console.log(calculate('soma', 3, 5));
console.log(calculate('subtrai', 2, 2));
console.log(calculate('multiplica', 2, 2));
console.log(calculate('divide', 21, 7));
